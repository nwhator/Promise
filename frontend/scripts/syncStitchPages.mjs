import fs from "node:fs";
import path from "node:path";

const frontendRoot = process.cwd();
const targetDir = path.join(frontendRoot, "stitch_promise_portfolio");
const sourceDir = path.join(frontendRoot, "..", "stitch_promise_portfolio");

if (!fs.existsSync(sourceDir)) {
  if (!fs.existsSync(targetDir)) {
    console.warn("[syncStitchPages] No source directory found; continuing without sync.");
  }
  process.exit(0);
}

fs.cpSync(sourceDir, targetDir, {
  recursive: true,
  force: true,
});

console.log("[syncStitchPages] Synced stitched HTML pages into frontend/stitch_promise_portfolio");
