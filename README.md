# 👁️ codewatch

> A file watcher that runs custom scripts automatically when source files change.

[![CI](https://img.shields.io/github/actions/workflow/status/yourusername/codewatch/ci.yml?style=for-the-badge)](https://github.com/yourusername/codewatch/actions)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)
[![Codespace Ready](https://img.shields.io/badge/Codespace-Ready-green?style=for-the-badge&logo=github)](https://codespaces.new/yourusername/codewatch)

---

## 🚀 What is codewatch?

`codewatch` monitors your project files and automatically runs configured scripts when changes are detected. Think of it as a smarter, scriptable alternative to `nodemon` — works with any language or tool.

```bash
# Watch src/ and run tests on change
codewatch --watch src/ --run "npm test"

# Watch *.py files and auto-format
codewatch --watch "**/*.py" --run "black ."

# Watch configs and reload service
codewatch --watch config/ --run "bash scripts/reload.sh"
```

---

## ✨ Features

- 🔍 Glob pattern file watching
- ⚡ Debounced triggers (no duplicate runs)
- 🔧 Any command or script as the handler
- 📋 YAML-based config file support
- 🎨 Colored terminal output with timestamps
- 🔄 Recursive directory watching
- 💾 Watch multiple patterns simultaneously

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/codewatch
cd codewatch

# Run setup
bash scripts/setup.sh

# Make codewatch available globally
npm link   # or: pip install -e .
```

---

## ⚙️ Configuration

Create a `codewatch.yml` in your project root:

```yaml
watchers:
  - name: "Run Tests"
    watch: ["src/**/*.js", "tests/**/*.js"]
    run: "npm test"
    debounce: 500

  - name: "Lint on Save"
    watch: ["**/*.py"]
    run: "flake8 ."
    debounce: 300

  - name: "Rebuild CSS"
    watch: ["styles/**/*.scss"]
    run: "sass styles/main.scss dist/main.css"
```

---

## 🏆 GitHub Achievement Scripts

```bash
bash scripts/setup.sh                          # Environment setup
bash scripts/unlock-all.sh                     # Interactive achievement menu
bash scripts/quickdraw.sh                      # ⚡ Quickdraw
bash scripts/yolo.sh                           # 🤠 YOLO
bash scripts/publicist.sh                      # 📢 Publicist
bash scripts/pull-shark.sh 2                   # 🦈 Pull Shark Bronze
bash scripts/pair-extraordinaire.sh "N" "e@m"  # 🤝 Pair Extraordinaire
node src/achievement-tracker.js                # 📊 Check progress
```

---

## 📁 Project Structure

```
codewatch/
├── .devcontainer/devcontainer.json
├── .github/
│   ├── workflows/{ci.yml,release.yml}
│   └── ISSUE_TEMPLATE/{bug.md,feature.md}
├── scripts/
│   ├── setup.sh
│   ├── quickdraw.sh
│   ├── yolo.sh
│   ├── publicist.sh
│   ├── pull-shark.sh
│   ├── pair-extraordinaire.sh
│   └── unlock-all.sh
├── src/
│   ├── watcher.js
│   └── achievement-tracker.js
├── codewatch.yml.example
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## 🤝 Contributing

PRs welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md). Every merged PR helps unlock **Pull Shark** 🦈
