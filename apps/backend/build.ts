Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "../../dist/backend",
  target: "bun",
  format: "esm",
  splitting: false,
  plugins: [],
  env: "inline",
  sourcemap: "external",
  minify: {
    whitespace: true,
    syntax: true,
  },
  naming: "[dir]/[name].[ext]",
  // root: '.',
  define: {
    "process.env.NODE_ENV": "'production'",
  },
  drop: ["console", "debugger", "alert", "assert", "exports", "imports"],
});
