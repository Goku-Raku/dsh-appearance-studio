# Bundled theme palettes and backgrounds

Appearance Studio includes local adaptations of three MIT-licensed palettes.
They change UI surfaces and accents; they are not full upstream editor themes
or official ports. Syntax highlighting and semantic status colors remain native.

| Palette | Included variants | Upstream | License notice |
| --- | --- | --- | --- |
| Catppuccin | Latte / Mocha | https://github.com/catppuccin/palette | [MIT](licenses/Catppuccin-MIT.txt), Copyright (c) 2021 Catppuccin |
| Nord | Snow Storm / Polar Night mapped to light / dark | https://github.com/nordtheme/nord | [MIT](licenses/Nord-MIT.txt), Copyright (c) 2016-present Sven Greb |
| Rosé Pine | Dawn / Main | https://github.com/rose-pine/rose-pine-theme | [MIT](licenses/Rose-Pine-MIT.txt), Copyright (c) 2023 Rosé Pine |

Exact palette source URLs, retrieval date and SHA-256 hashes are recorded in
[theme-sources.json](theme-sources.json). The Nord light UI mapping is an
Appearance Studio adaptation, not a separate official Nord theme.

## Matching backgrounds

Pastel clouds / 奶霜云霞, Nordic horizon / 北境天际 and Rose glow / 玫瑰微光
are original static CSS gradient compositions designed for this plugin using the
credited palettes. Each has a light and dark variant with separate outer-frame
and conversation gradients to distinguish the surfaces. They are **not upstream
wallpaper artwork**, photographs or downloaded image assets. These compositions
are provided under [MIT](licenses/Appearance-Studio-Backgrounds-MIT.txt).

Everything needed to render the palettes and backgrounds is embedded in
`client.js`. No network requests, remote fonts or external image URLs are used.
Keep this file and `licenses/` in any redistributed plugin package.

Theme names identify their respective projects; no affiliation or endorsement
is claimed. The licenses above cover the credited material and new background
compositions, not unrelated pre-existing plugin code or user-uploaded images.

## Bundled AI wallpaper

The saved custom image `assets/bonfire-chu2-manga.jpg` is NovelAI-generated fan art
from [Goku-Raku/shakunetsu-bonfire-mv](https://github.com/Goku-Raku/shakunetsu-bonfire-mv).
It is **excluded from the MIT code/palette licenses** and is limited to
non-commercial fan creation and learning under the source project's terms.
Character rights are not granted. This applies to its embedded copy in `client.js`
and screenshots containing the artwork as well. See [provenance and terms](assets/README.md).

## Host, fonts and development credits

The plugin targets the official DeepSeek Harness Desktop application, using its
Cordis plugin and embedded Web Client APIs. Desktop supplies React; React and
host implementation files are not redistributed in this package. Font names
refer to installed system fonts; no third-party font files are bundled.

Goku-Raku directed and reviewed the visual design. OpenAI Codex assisted with
implementation, testing, translations and release preparation. AI assistance is
not a warranty or a third-party security audit. The wallpaper's AI-image workflow
belongs to the separate Bonfire MV project; no claim is made that this plugin's
development produced the entire MV.
