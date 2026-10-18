# Changelog

## 1.0.0 — 2026-10-18

First public release of the Desktop appearance plugin. This release consolidates
the local design iterations below; they are not separate previously published
versions. Full feature descriptions and usage are available in the four READMEs.

- Added light/dark/system modes, 9 surface choices, 11 accent presets and custom accents.
- Bundled Catppuccin Latte/Mocha, Nord Snow/Polar mappings and Rosé Pine Dawn/Main,
  their MIT notices and 3 original paired gradients; 7 gradient backgrounds total.
- Distinguished the outer frame from the conversation through separate materials.
- Added independent frame/content tint (0–85%) and image blur (0–64 px); kept
  fixed 36 px top/bottom feathering independent from content blur.
- Preloaded the author's saved NovelAI manga wallpaper from the Bonfire MV project
  in Custom image. Kept None as the fresh-install wallpaper selection, preserved
  existing saved images and explicit removal, and documented separate image terms.
- Added separate light/dark bubble colors, remembered custom colors, and readable
  button foregrounds; softened large primary action fills.
- Added proportional 0–40 px corners with quick 0/16/40 choices, plus deliberate
  square exceptions for conversation edges, trajectory rows and dock boundaries.
- Kept chat content above the composer; unified chat/trajectory composer position,
  removed the bottom seam, and retained the centered input card on a continuous
  translucent trajectory background.
- Added a small scroll-aware trajectory edge fade; improved light scrollbars and
  the conversation side index. End positions remain readable.
- Added chat/trajectory transitions and sidebar animation with reduced-motion support.
- Corrected large-radius menu hover shapes without clipping shortcuts, standardized
  file hover previews and raised ordinary tooltips above the input area.
- Kept split dock edges square and the expanded dock's lower-left edge square;
  internal cards and detached windows retain their own geometry.
- Hid edge frosting on welcome/loading views, restored it for active conversations,
  and made inline-code fills translucent without fading their text.
- Added independent interface/code/terminal font family, size and per-mode color;
  searchable, lazy-loaded font choices, manual input and explicit local-font refresh.
- Added secondary-text contrast and 3 text-shadow levels without overriding code
  syntax colors or terminal ANSI colors.
- Compacted theme/background tiles, radius controls and text settings; aligned
  typography into consistent font/size and preview/color columns with narrow-panel wrapping.
- Batched frame updates and persistence, cached blur variants, limited image sizes,
  avoided scroll-time DOM blur, and restored owned styles/listeners on disposal.
- Added Traditional Chinese, Simplified Chinese, English and Japanese documentation,
  simulated settings previews in Chinese/English, installation/rollback instructions,
  provenance, privacy notes, package checks and release checksums.

### Compatibility

Target: official Windows DeepSeek Harness Desktop **0.2.1-rc.2**. The package is
version-gated to that exact tested runtime. Future runtime versions require
rechecking internal selectors; broad `>=` compatibility is deliberately not claimed.
The implementation uses the Desktop Web Client API (`platform: web` in package
metadata); that field is a runtime declaration, not standalone-browser support.
