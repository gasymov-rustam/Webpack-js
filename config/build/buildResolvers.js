const buildResolvers = ({ paths }) => ({
  extensions: ['.jsx', '.js'],
  preferAbsolute: true,
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {
    src: paths.src,
  },
});

module.exports = { buildResolvers };
