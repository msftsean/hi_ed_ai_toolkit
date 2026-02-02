# 🚀 Setup Guide: Deploying Your Higher Ed AI Toolkit

This guide will help you get the repository live on GitHub with GitHub Pages.

---

## Step 1: Push to GitHub

### Option A: Using Git Command Line

```bash
# Navigate to the repository
cd /path/to/hi_ed_ai_toolkit

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Higher Ed AI Toolkit v1.0"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/msftsean/hi_ed_ai_toolkit.git

# Push to main branch
git push -u origin main
```

### Option B: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository
3. Select the `hi_ed_ai_toolkit` folder
4. Click "Publish repository"
5. Set repository name: `hi_ed_ai_toolkit`
6. Uncheck "Keep this code private" (or keep private if preferred)
7. Click "Publish repository"

---

## Step 2: Enable GitHub Pages

1. Go to your repository: `https://github.com/msftsean/hi_ed_ai_toolkit`

2. Click **Settings** (top right)

3. In the left sidebar, click **Pages**

4. Under "Source":
   - Branch: Select **main**
   - Folder: Select **/docs**
   - Click **Save**

5. Wait 1-2 minutes for GitHub to build your site

6. Your site will be live at:
   ```
   https://msftsean.github.io/hi_ed_ai_toolkit/
   ```

---

## Step 3: Verify Your Site

1. Visit `https://msftsean.github.io/hi_ed_ai_toolkit/`

2. Check that all sections load:
   - Header navigation works
   - Hero section displays correctly
   - All resource sections are visible
   - Footer links work
   - Smooth scrolling works

3. Test on mobile:
   - Open on your phone
   - Check responsive design
   - Verify navigation works

---

## Step 4: Update Your QR Code Destination

Your slide 29 QR code should point to:
```
https://msftsean.github.io/hi_ed_ai_toolkit/
```

**To update the QR code:**

1. Visit a QR code generator: https://qr.io or https://www.qr-code-generator.com/

2. Enter URL: `https://msftsean.github.io/hi_ed_ai_toolkit/`

3. Generate QR code

4. Download as PNG (high resolution)

5. Replace QR code in slide 29 (keep same design/layout)

---

## Step 5: Add Content Over Time

### Add Presentation Materials

```bash
# Create presentations folder
mkdir -p event-materials/presentations

# Add your presentation files
cp /path/to/your/ethics-slides.pptx event-materials/presentations/
cp /path/to/your/demo-slides.pptx event-materials/presentations/

# Commit and push
git add event-materials/presentations/
git commit -m "Add AI Ethics presentation materials"
git push origin main
```

### Add Demo Materials

```bash
# Create demos folder
mkdir -p event-materials/demos

# Add demo materials
cp /path/to/demo-video.mp4 event-materials/demos/
cp /path/to/run-of-show.md event-materials/demos/

# Commit and push
git add event-materials/demos/
git commit -m "Add Front Door Agent demo materials"
git push origin main
```

### Update Status Badges

When you add new content, update the status table in README.md:

```markdown
| Resource Category | Status | Version | Last Updated |
|-------------------|--------|---------|--------------|
| **Event Materials** | 🟢 Published | v1.0 | Feb 3, 2026 |
| **Frameworks** | 🟢 Published | v1.0 | Feb 10, 2026 |  ← Update this
```

---

## Step 6: Custom Domain (Optional)

If you want to use a custom domain like `ai-toolkit.yourdomain.edu`:

1. In repository Settings → Pages

2. Under "Custom domain", enter: `ai-toolkit.yourdomain.edu`

3. Click Save

4. In your DNS provider, add a CNAME record:
   ```
   Type: CNAME
   Name: ai-toolkit
   Value: msftsean.github.io
   ```

5. Wait for DNS propagation (up to 24 hours)

---

## Troubleshooting

### Site Not Loading

**Problem:** Getting 404 error  
**Solution:** 
- Check that `/docs` folder is selected in GitHub Pages settings
- Verify `index.html` exists in `/docs` folder
- Wait 2-3 minutes after enabling Pages

### Styling Not Working

**Problem:** Site loads but looks unstyled  
**Solution:**
- Check that `assets/css/style.css` exists in `/docs` folder
- Verify the path in `index.html` is correct: `assets/css/style.css`
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### Images/Assets Not Loading

**Problem:** Icons or images broken  
**Solution:**
- Verify all asset paths are relative (no leading `/`)
- Check that files exist in `/docs/assets/` folder
- Check file extensions match (case-sensitive on GitHub)

---

## Maintenance

### Regular Updates

```bash
# Make changes to files
# ...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add Stanford case study"

# Push to GitHub
git push origin main

# GitHub Pages will auto-rebuild (1-2 min)
```

### Version Updates

When you release new versions:

1. Update version number in README.md:
   ```markdown
   ![Version](https://img.shields.io/badge/Version-1.1.0-blue)
   ```

2. Update version history table:
   ```markdown
   | **1.1.0** | Feb 10, 2026 | Added frameworks section |
   ```

3. Tag the release in Git:
   ```bash
   git tag v1.1.0
   git push origin v1.1.0
   ```

---

## Analytics (Optional)

To track site usage, add Google Analytics:

1. Get Google Analytics tracking ID

2. Add to `/docs/index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR-GA-ID');
   </script>
   ```

3. Commit and push

---

## Repository Structure

```
hi_ed_ai_toolkit/
├── README.md                 # Main repository README
├── LICENSE                   # Microsoft-specific license
├── CONTRIBUTING.md           # Contribution guidelines
├── .gitignore               # Git ignore rules
│
├── docs/                     # GitHub Pages site (DO NOT DELETE)
│   ├── index.html           # Main landing page
│   ├── _config.yml          # Pages configuration
│   └── assets/
│       ├── css/
│       │   └── style.css    # Main stylesheet
│       └── js/
│           └── main.js      # JavaScript functionality
│
├── event-materials/          # Azure Days resources
│   ├── README.md
│   ├── presentations/       # Add slides here
│   ├── demos/              # Add demo materials here
│   └── hackathon/          # Add hackathon materials here
│
├── frameworks/               # Governance frameworks
│   └── README.md            # Placeholder for now
│
├── code-samples/             # Reference implementations
│   ├── README.md
│   ├── azure/              # Azure-specific examples
│   └── security/           # Security guides
│
├── case-studies/             # Real-world implementations
│   └── README.md            # Placeholder for now
│
└── tools/                    # Templates and checklists
    └── README.md            # Placeholder for now
```

---

## Quick Reference: Important URLs

**Repository:**
https://github.com/msftsean/hi_ed_ai_toolkit

**GitHub Pages Site:**
https://msftsean.github.io/hi_ed_ai_toolkit/

**Settings (to enable Pages):**
https://github.com/msftsean/hi_ed_ai_toolkit/settings/pages

**Front Door Agent Code:**
https://github.com/msftsean/hiedcab_frontdoor_agent

---

## Need Help?

📧 **Email:** sean.gayle@microsoft.com  
💬 **Issues:** Open a GitHub Issue  
📚 **GitHub Pages Docs:** https://docs.github.com/en/pages

---

**Ready to launch!** 🚀

Once you push to GitHub and enable Pages, your toolkit will be live and accessible via QR code at your presentation.
