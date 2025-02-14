module.exports = {
    presets: [
      ["@babel/preset-env", { modules: "commonjs" }], // Ensures Jest can handle ES modules
      "@babel/preset-react",
    ],
  };