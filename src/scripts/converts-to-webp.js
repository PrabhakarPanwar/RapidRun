/**
 * Batch-converts all images in a folder (and its subfolders) to .webp
 *
 * Setup:
 *   npm install sharp
 *
 * Usage:
 *   node convert-to-webp.js
 *
 * By default this scans ./public/images and writes .webp versions
 * next to the originals (same folder, same name, new extension).
 * Change INPUT_DIR below if your images live somewhere else.
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// ---- CONFIG ----
const INPUT_DIR = path.join(__dirname, "..", "..", "public", "images");
const QUALITY = 80; // 0-100, 80 is a good balance of size vs quality
const DELETE_ORIGINALS = false; // set true to remove the source file after conversion
const VALID_EXTENSIONS = [".png", ".jpg", ".jpeg"];
// ----------------

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!VALID_EXTENSIONS.includes(ext)) return;

  const outputPath = filePath.slice(0, -ext.length) + ".webp";

  try {
    await sharp(filePath).webp({ quality: QUALITY }).toFile(outputPath);

    console.log(
      `✓ ${path.relative(INPUT_DIR, filePath)} -> ${path.basename(outputPath)}`,
    );

    if (DELETE_ORIGINALS) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error(`✗ Failed to convert ${filePath}:`, err.message);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`Input directory not found: ${INPUT_DIR}`);
    console.error(
      "Update INPUT_DIR at the top of this script to point to your images folder.",
    );
    process.exit(1);
  }

  const allFiles = walkDir(INPUT_DIR);
  const imageFiles = allFiles.filter((f) =>
    VALID_EXTENSIONS.includes(path.extname(f).toLowerCase()),
  );

  if (imageFiles.length === 0) {
    console.log("No .png/.jpg/.jpeg files found to convert.");
    return;
  }

  console.log(`Found ${imageFiles.length} image(s). Converting...\n`);

  for (const file of imageFiles) {
    await convertImage(file);
  }

  console.log("\nDone.");
}

main();
// node public/converts-to-webp.js
