# Bundled wallpaper provenance and separate terms

`bonfire-chu2-manga.jpg` is the author's saved custom wallpaper, exported without
further image processing from Appearance Studio. It is AI-generated fan art from
the author's other project, [灼熱 Bonfire! MV](https://github.com/Goku-Raku/shakunetsu-bonfire-mv).

| Field | Record |
| --- | --- |
| Project owner / selection | [Goku-Raku](https://github.com/Goku-Raku) |
| Original project | `Goku-Raku/shakunetsu-bonfire-mv` |
| Original local variant | `source/novelai/picked_v2/chu2_rap__manga.png` |
| Generation run | `20261017-035207-063b276d` |
| Generation tool | NovelAI, as recorded in the source project's workflow |
| Depicted character | CHU² / RAISE A SUILEN / BanG Dream! fan interpretation |
| Bundled encoding | JPEG, 1344 × 768, 461,384 bytes |
| SHA-256 | `502cf3ccec7e94c2e4ad2d3a93789bb1d7f5ec5773c3cf5acf5528d41fd0dc10` |

The exact original variant is a local production asset; this repository supplies
the saved JPEG so installation does not depend on that file being present in the
MV repository. It is not official character artwork, an official wallpaper, or
an image licensed by the character's rights holders. No song audio, lyrics,
NovelAI credentials, generation requests or reference images are bundled here.

## Image terms

The plugin's MIT license **does not apply to this image**, screenshots containing
it, or the underlying characters. The source project's
[disclaimer](https://github.com/Goku-Raku/shakunetsu-bonfire-mv/blob/main/DISCLAIMER.md)
limits these AI fan-art images to non-commercial fan creation and learning.
Retain the source attribution and these notices when redistributing the image.
Do not use it for sales, advertisements or other commercial purposes. These
project terms do not grant rights to third-party characters or establish that
every possible use is permitted. For commercial distributions, replace/remove
the image and regenerate the embedded wallpaper before packaging.

Character names, designs and related marks belong to their respective rights
holders. No affiliation, endorsement or official authorization is claimed.
Rights holders may open an issue without including private information; the
maintainer will review removal/correction requests.

## Runtime and replacement

The JPEG is embedded once as a data URI in `client.js` for offline loading. The
Custom image tile is preloaded with it; the initial wallpaper selection remains
None. Selecting a different wallpaper does not delete the saved image. Replacing
or removing it affects local settings only. Reset appearance restores this
bundled image. Existing explicitly saved images, including an empty selection,
are preserved during upgrades.

To replace the distribution default, replace `bonfire-chu2-manga.jpg`, update this
file and its terms, then run `node scripts/sync-wallpaper.mjs`. Do not relabel
third-party or AI fan artwork as MIT code.
