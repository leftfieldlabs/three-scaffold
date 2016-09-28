var PATH = {
  ASSETS: {
    SRC: './assets/**',
    DEST: './build/assets'
  },
  HTML: {
    SRC: './htdocs/*.html',
    WATCH: './htdocs/*.html',
  },
  IMAGES: {
    SRC: './assets/images/**',
    DEST: './build/assets/images',
  },
  STYLE: {
    SRC: './css/app.scss',
    WATCH: './css/**'
  },
  BUILD: 'build',
  OUT: 'build.js',
  SRC: '.',
  ENTRY_POINT: './js/main.js'
};

module.exports = PATH;
