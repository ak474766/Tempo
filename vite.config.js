/**
 * Vite configuration for Tempo
 * A modern time management application
 */
const { defineConfig } = require('vite');
const { resolve } = require('path');

module.exports = defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  
  return {
    // Base public path - use relative path for GitHub Pages compatibility
    base: './',
    
    // Resolve aliases for cleaner imports
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@js': resolve(__dirname, 'src/js'),
        '@css': resolve(__dirname, 'src/css'),
        '@components': resolve(__dirname, 'src/js/components')
      }
    },
    
    // Development server settings
    server: {
      port: 3000,
      open: true,
      cors: true,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        timeout: 30000,
      },
      // Show overlay for errors only in development
      overlay: {
        warnings: false,
        errors: true
      }
    },
    
    // Build options
    build: {
      // Output directory for production build
      outDir: 'dist',
      
      // Clean the output directory before build
      emptyOutDir: true,
      
      // Minification options
      minify: isProd ? 'terser' : false,
      
      // CSS code splitting
      cssCodeSplit: true,
      
      // Generate source maps in development only
      sourcemap: !isProd,
      
      // Terser options for minification
      terserOptions: {
        compress: {
          drop_console: isProd,
          drop_debugger: isProd,
        },
        format: {
          comments: false
        }
      },
      
      // Rollup options for bundling
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        },
        output: {
          // Create separate chunks for vendors
          manualChunks: {
            'vendor-chart': ['chart.js'],
            'vendor-icons': ['@fortawesome/fontawesome-free']
          },
          // Clean file names with content hashing for cache busting
          entryFileNames: isProd ? 'assets/[name].[hash].js' : 'assets/[name].js',
          chunkFileNames: isProd ? 'assets/[name].[hash].js' : 'assets/[name].js',
          assetFileNames: isProd ? 'assets/[name].[hash].[ext]' : 'assets/[name].[ext]',
        },
      },
    },
    
    // Optimization for dependencies
    optimizeDeps: {
      include: ['chart.js', '@fortawesome/fontawesome-free'],
      exclude: ['d3', 'internmap']
    },
    
    // External modules
    ssr: {
      external: ['d3', 'internmap']
    },
    
    // Performance optimizations
    esbuild: {
      // Enable JSX
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    }
  };
}); 