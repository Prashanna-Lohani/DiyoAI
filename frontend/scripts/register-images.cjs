// Lets the seed script import `@/assets/images/*.png` like Next.js does, but
// resolves them to absolute file paths so they can be uploaded to Sanity.
for (const ext of [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]) {
  require.extensions[ext] = (module, filename) => {
    module.exports = {
      __esModule: true,
      default: { src: filename, width: 0, height: 0 },
    };
  };
}
