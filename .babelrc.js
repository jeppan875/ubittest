module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          utils: "./utils",
          containers: "./containers",
          apiLib: "./apiLib",
          components: "./components",
          globals: "./globals"
        }
      }
    ],
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ]
};
