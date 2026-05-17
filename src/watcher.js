#!/usr/bin/env node
// 👁️ codewatch — File watcher core
// Usage: node src/watcher.js --watch "src/**/*.js" --run "npm test"

const fs   = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

const args = process.argv.slice(2);
const watchPattern = args[args.indexOf('--watch') + 1] || 'src/';
const runCmd       = args[args.indexOf('--run')  + 1] || 'echo "File changed"';
const debounceMs   = parseInt(args[args.indexOf('--debounce') + 1]) || 300;

const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const NC     = '\x1b[0m';

let debounceTimer = null;
let isRunning     = false;

function timestamp() {
  return new Date().toLocaleTimeString();
}

function runCommand(cmd, changedFile) {
  if (isRunning) return;
  isRunning = true;
  console.log(`\n${CYAN}[${timestamp()}]${NC} 🔄 ${changedFile} changed — running: ${YELLOW}${cmd}${NC}\n`);
  try {
    execSync(cmd, { stdio: 'inherit', shell: true });
    console.log(`\n${GREEN}[${timestamp()}] ✅ Done${NC}`);
  } catch (e) {
    console.error(`\n[${timestamp()}] ❌ Command failed (exit ${e.status})`);
  } finally {
    isRunning = false;
  }
}

function watchDir(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    process.exit(1);
  }
  fs.watch(dir, { recursive: true }, (event, filename) => {
    if (!filename) return;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      runCommand(runCmd, filename);
    }, debounceMs);
  });
  console.log(`\n${CYAN}👁️  codewatch${NC} — watching ${GREEN}${dir}${NC}`);
  console.log(`   Run: ${YELLOW}${runCmd}${NC}`);
  console.log(`   Debounce: ${debounceMs}ms\n`);
  console.log(`Press ${YELLOW}Ctrl+C${NC} to stop.\n`);
}

watchDir(watchPattern);
