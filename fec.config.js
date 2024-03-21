const path = require('path');
const dependencies = require('./package.json').dependencies;

module.exports = {
  appUrl: ['/settings/learning-resources', '/openshift/learning-resources'],
  debug: true,
  useProxy: true,
  proxyVerbose: true,
  sassPrefix: '.learning-resources, .learningResources',
  /**
   * Change to false after your app is registered in configuration files
   */
  interceptChromeConfig: false,
  hotReload: true,
  /**
   * Add additional webpack plugins
   */
  plugins: [],
  moduleFederation: {
    exposes: {
      './RootApp': path.resolve(__dirname, './src/AppEntry.tsx'),
      './BookmarkedLearninResourcesWidget': path.resolve(
        __dirname,
        './src/components/LearningResourcesWidget/LearningResourcesWidget'
      ),
    },
    exclude: ['react-router-dom'],
    shared: [
      {
        'react-router-dom': {
          singleton: true,
          version: dependencies['react-router-dom'],
        },
      },
    ],
  },
};
