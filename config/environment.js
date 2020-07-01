'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'wunderkammer',
    podModulePrefix: 'wunderkammer/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV['ember-cli-mirage'] = { enabled: true, autostart: true };

  ENV['googleMutantLeaflet'] = {
    apiKey: 'AIzaSyAdtRO3yA1Yp1LGDa8bA-dkDLNVit1fXvA',
    libraries: [],
    include: true,
  };

  ENV['gReCaptcha'] = {
    jsUrl: 'https://www.google.com/recaptcha/api.js?render=explicit', // default
    siteKey: '6LfxAKwZAAAAAMRHZAx0NYh6Mr0rzHnQOwzgL8-4', // secret is is stored in github action keys, and placed into /public/.htaccess
  };

  ENV['contentSecurityPolicy'] = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' *.googleapis.com",
    'font-src': "'self' fonts.gstatic.com",
    'img-src': "'self' data: *.googleapis.com maps.gstatic.com *.gstatic.com",
    'style-src': "'self' 'unsafe-inline' *.googleapis.com",
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
