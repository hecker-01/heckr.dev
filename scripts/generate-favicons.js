// Builds every favicon variant in public/ from the 1024px master favicon.png:
// favicon.ico, PNG sizes, apple-touch-icon, Android/PWA icons (incl. maskable)
// and site.webmanifest. Outputs newer than the master are skipped.
import { stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const publicDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
);
const master = path.join(publicDir, "favicon.png");
const background = "#1e1e2e";
const themeColor = "#11111b";

const mtime = async (file) => {
  try {
    return (await stat(file)).mtimeMs;
  } catch {
    return 0;
  }
};
const masterTime = await mtime(master);
let written = 0;

const write = async (name, make) => {
  const output = path.join(publicDir, name);
  if ((await mtime(output)) > masterTime) return;
  await make(output);
  written++;
  console.log(`generated ${name}`);
};

const square = (size) => sharp(master).resize(size, size);

// ICO container holding PNG-encoded images.
const ico = async (sizes) => {
  const images = await Promise.all(sizes.map((size) => square(size).png().toBuffer()));
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach((image, i) => {
    const at = 6 + 16 * i;
    header[at] = sizes[i];
    header[at + 1] = sizes[i];
    header.writeUInt16LE(1, at + 4);
    header.writeUInt16LE(32, at + 6);
    header.writeUInt32LE(image.length, at + 8);
    header.writeUInt32LE(offset, at + 12);
    offset += image.length;
  });
  return Buffer.concat([header, ...images]);
};

await write("favicon.ico", async (file) =>
  writeFile(file, await ico([16, 32, 48])),
);
for (const size of [16, 32, 48]) {
  await write(`favicon-${size}x${size}.png`, (file) => square(size).toFile(file));
}
await write("apple-touch-icon.png", (file) =>
  square(180).flatten({ background }).toFile(file),
);
for (const size of [192, 512]) {
  await write(`android-chrome-${size}x${size}.png`, (file) =>
    square(size).toFile(file),
  );
}
// Maskable icons need the artwork inside the central 80% safe zone.
await write("maskable-icon-512x512.png", async (file) =>
  sharp({
    create: { width: 512, height: 512, channels: 4, background },
  })
    .composite([{ input: await square(410).toBuffer(), gravity: "centre" }])
    .png()
    .toFile(file),
);
await write("site.webmanifest", (file) =>
  writeFile(
    file,
    JSON.stringify(
      {
        name: "heckr.dev",
        short_name: "heckr.dev",
        icons: [
          { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "/maskable-icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
        theme_color: themeColor,
        background_color: background,
        display: "standalone",
        start_url: "/",
      },
      null,
      2,
    ) + "\n",
  ),
);
console.log(written ? `generated ${written} favicon files` : "favicons up to date");
