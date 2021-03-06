'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProductionLikeBuild = ['production', 'testing'].indexOf(EmberApp.env()) > -1;

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapCSS: false,
    },
    fingerprint: {
      // https://github.com/rickharrison/broccoli-asset-rev
      enabled: isProductionLikeBuild,
      exclude: ['favicon-*.png', 'members', 'assets'],
    },
    'ember-math-helpers': {
      only: ['mod', 'mult'],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
