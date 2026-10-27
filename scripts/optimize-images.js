// Writes a 1200px `name.webp` and a 640px `name-640.webp` next to every PNG/JPEG
// in public/. Outputs that are already newer than their source are skipped, so
// running this on every build is cheap and only new or changed images get work.
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const publicDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
);
const sizes = [
  { suffix: "", width: 1200 },
  { suffix: "-640", width: 640 },
];
// favicon.png and the icons generated from it (scripts/generate-favicons.js).
const skip = /^(favicon|apple-touch-icon|android-chrome|maskable-icon)/;

const walk = async (dir) =>
  (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((entry) =>
        entry.isDirectory()
          ? walk(path.join(dir, entry.name))
          : [path.join(dir, entry.name)],
      ),
    )
  ).flat();

const mtime = async (file) => {
  try {
    return (await stat(file)).mtimeMs;
  } catch {
    return 0;
  }
};

let written = 0;
for (const source of await walk(publicDir)) {
  const { dir, name, ext } = path.parse(source);
  if (!/^\.(png|jpe?g)$/i.test(ext) || skip.test(name)) continue;

  const sourceTime = await mtime(source);
  for (const { suffix, width } of sizes) {
    const output = path.join(dir, `${name}${suffix}.webp`);
    if ((await mtime(output)) > sourceTime) continue;
    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output);
    written++;
    console.log(`optimized ${path.relative(publicDir, output)}`);
  }
}
console.log(written ? `wrote ${written} images` : "images up to date");
