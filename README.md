# Roxx Mixx Duo Website

Welcome to the repository for the official website of **Roxx Mixx Duo**, Melbourne's premier multilingual cover band playing Rock, Pop, R&B, Jazz, Country, Bachata, and more in over 18 languages.

The website is built using **Hugo** (a fast static site generator) and deployed automatically via GitHub Pages.

---

## 🛠️ Prerequisites

To run or build this site locally, you **must install the Extended version of Hugo**, as this project uses Sass/SCSS (`assets/scss`) for custom styling.

### Installation

#### macOS (via Homebrew)
Homebrew installs the Extended version by default:
```bash
brew install hugo
```

#### Windows
Using Chocolatey:
```powershell
choco install hugo-extended
```
Or using Scoop:
```powershell
scoop install hugo-extended
```

#### Linux
You can download the latest `hugo_extended` `.deb` or `.tar.gz` package from the [Hugo Releases page](https://github.com/gohugoio/hugo/releases).

Verify your installation:
```bash
hugo version
```
Ensure the output includes `extended` (e.g., `hugo v0.124.1+extended ...`).

---

## 🚀 Running the Site Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/roxxmixx-duo/roxxmixx-duo.github.io.git
   cd roxxmixx-duo.github.io
   ```

2. **Start the Hugo development server**:
   ```bash
   hugo server
   ```
   *To include draft content or future-dated content, use:*
   ```bash
   hugo server -D -F
   ```

3. **View the site**:
   Open [http://localhost:1313/](http://localhost:1313/) in your web browser. Hugo supports LiveReload, so the page will automatically refresh as you edit files in `content/`, `layouts/`, or `assets/`.

---

## 🏗️ Building Locally

To generate the static HTML files locally (e.g., for testing the production build):

```bash
hugo --gc --minify
```

The compiled site will be generated in the `public/` directory.

---

## 🌐 Deployment

Deployment is fully automated! 

When you push or merge changes into the `main` branch:
1. A GitHub Actions workflow (`.github/workflows/hugo.yml`) is triggered.
2. It builds the site using Hugo Extended.
3. It deploys the static files directly to GitHub Pages.

You can view the production site at [https://roxxmixx-duo.github.io/](https://roxxmixx-duo.github.io/).
