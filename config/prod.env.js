module.exports = {
  prod: {
    entry: './src/index.js',
    lib: 'vue-calendar.js',
    extensions: ['.js', '.vue', '.json'],
    env: {
      NODE_ENV: '"development"'
    }
  }
};
