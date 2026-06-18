import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";

const command = process.argv[2] ?? "dev";
const args = process.argv.slice(3);
const wasmDir = resolve("node_modules", "@next", "swc-wasm-nodejs");

if (!existsSync(join(wasmDir, "wasm.js"))) {
  console.error("Missing @next/swc-wasm-nodejs. Run npm install first.");
  process.exit(1);
}

const nextBin = resolve("node_modules", "next", "dist", "bin", "next");

const child = spawn(process.execPath, [nextBin, command, ...args], {
  env: {
    ...process.env,
    NEXT_TEST_WASM_DIR: wasmDir,
    NEXT_SWC_PATH: resolve(".next-swc-cache")
  },
  stdio: "inherit",
  shell: false
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
