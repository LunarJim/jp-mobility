exports.files = {
  // Je demande à Brunch de compiler mes fichiers javascript...
    javascripts: {
      joinTo: {
        // ... dans app.js si le fichier d'origine se trouve dans le dossier "app"
        'js/app.js': /^app/,
        // ... dans app.js si le fichier d'origine se trouve dans le dossier "node_modules"
        'js/vendor.js': /^node_modules/
      }
    },
  // Je demande à Brunch de compiler mes fichiers css...
    stylesheets: {
      joinTo: {
        // ... dans app.css si le fichier d'origine se trouve dans le dossier "app"
        'css/app.css': /^app/,
        // ... dans app.css si le fichier d'origine se trouve dans le dossier "node_modules"
        'css/vendor.css': /^node_modules/
      }
    }
};

exports.plugins = {
  browserSync: {
    files: ['*']
  }
};

exports.watcher = {
  usePolling: true,
  awaitWriteFinish: true
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['initialize']
  }
};

exports.npm = {
  styles: {
    'normalize.css': ['normalize.css']
  },
  globals: {
    // Je dis à Brunch de créer les variable $ et jQuery
    // ayant pourvaleur la librairie jquery
    '$': 'jquery',
    'jQuery': 'jquery',
    // Cela me permet de ne pas écrire dans mon javascript :
    // var $ = jQuery = require('jquery');
    // D'après la doc de jquery.scrollex, je vais avoir besoin de ma "variable" scrollex
    'scrollex': 'jquery.scrollex',
    // D'après la doc de rellax, je vais avoir besoin de ma "variable" rellax
    'Rellax': 'rellax'
  }
};
