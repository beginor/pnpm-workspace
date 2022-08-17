/** Browser Sync Config */
module.exports = {
  /**  files to watch */
  files: [
    'dist/**/*.*',
    'test/**/*.*'
  ],
  server: {
    baseDir: './',
    directory: true
  },
  open: false,
  cors: true
};
