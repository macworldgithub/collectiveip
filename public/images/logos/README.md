# Brand Logos for Collective-Branded Demos

## Required Logo Files

Place PNG logo files in this folder (`public/images/logos/`).

| File Name | Brand | Suggested Source |
|-----------|-------|------------------|
| `knight-frank.png` | Knight Frank | https://www.knightfrank.com |
| `gb-bank.png` | GB Bank | https://www.gbbank.co.uk |
| `softcat.png` | Softcat | https://www.softcat.com |
| `rosa-penna.png` | Rosa Penna | Download from brand website |
| `finsuite.png` | FinSuite | Download from brand website |
| `byd.png` | BYD | https://www.byd.com |
| `tradies.png` | Tradies Demo | Create or download generic trades logo |

## How to Download

1. Visit each brand's website
2. Right-click their logo in the header/footer
3. Save as PNG (or convert from SVG/WebP)
4. Rename to match the file names above
5. Place in `public/images/logos/`

## Recommended Logo Specs

- Format: PNG with transparent background
- Height: ~60–120px (will be displayed at h-4 to h-6)
- Max width: ~200px
- Keep file size under 20KB per logo for fast loading

## Where URLs Are Configured

Demo and original brand URLs are set in:
`src/pages/BrandedDemoPage.tsx`

Update the `url` and `originalUrl` fields for each demo once the live demo sites and brand sites are confirmed.
