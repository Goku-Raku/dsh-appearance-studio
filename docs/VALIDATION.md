# Validation and limitations — 1.0.0

Date: 2026-10-18. Target host: official **Windows DeepSeek Harness Desktop
0.2.1-rc.2**. These are development checks, not an independent security audit.

## Evidence

| Check | Result and scope |
| --- | --- |
| Mounted settings and interaction regression | 51/51 passed in an isolated Edge/React fixture using the plugin and selected host CSS. Includes fonts, layout, palette readability and controls. |
| Theme pack regression | 27/27 passed: paired themes, preserved personal choices, attribution, frame/content separation and offline behavior. |
| Frosted-material regression | 12/12 passed in the same fixture environment. |
| Distribution default image | 5/5 passed using the public package client: bundled tile on a fresh state, persistent removal, reset, preservation of an existing image, and no page errors/external requests. |
| Official CLI installation | The `.tgz` installed successfully into a separate Desktop profile through the official bundled CLI. It was installed in the package manager store, not linked to the development source directory. Installed `client.js` matched the public package hash below. |
| Clean native launch | Official Desktop launched with an isolated profile/user-data directory and reached its initial login/setup screen. Full signed-in operation in this clean profile was **not** tested; no personal credentials were copied. |
| Public file check | `npm run check`: JavaScript syntax, package/client/bundle identifiers, exact host version gate, image bytes/hash, required notices, relative documentation links and checkout size below 10 MB. |
| Release archive | Packaged with `npm pack --ignore-scripts`; the Release includes `SHA256SUMS.txt` for the actual archive. |

Public runtime `client.js` SHA-256:

```text
19f40480d02b651ba4376be53e17373614c8324750e85b4076ed2e9f8e7689b7
```

The 90 general regression checks used the local development identifier. Its
client SHA-256 was
`ac938a91be90ed959e442603e1cb98c2067c3c06bdfdcd4d6a3baab0981dd2f2`.
The public client differs only by replacing the development package identifier
with `dsh-appearance-studio`; the five distribution-image checks used that public
client directly. The private fixture does not ship copied host implementation
files in this repository.

## Preview images

The README images are **simulated settings previews**, rendered from the actual
plugin controls in an isolated React fixture. They are not native Desktop
captures. Chinese READMEs share the Chinese controls; English and Japanese
READMEs share the English controls. No private conversation, account token or
user profile is included. The appearance UI itself currently supports Chinese
and English, not all four documentation languages.

## Boundaries

- macOS, Linux, standalone browser deployments and other Desktop versions have
  not been validated. Exact version gating intentionally avoids a broad promise.
- Fixture results do not prove every native dock, tooltip, menu, scrolling state
  or future host update. Internal host DOM and hashed classes are sensitive to
  changes. Report the precise host version when filing an issue.
- The local-font list is a snapshot of names; fonts are not bundled and may fall
  back on another machine. Refresh requests host-supported local font access.
- The plugin renders frosted wallpaper inside the app. It does not enable OS
  window transparency or promise a view of applications behind Desktop.
- `npm run check` is reproducible from this public source. The host-shaped test
  fixture uses locally extracted host CSS and is intentionally not redistributed;
  the counts above are a maintainer test record, not a bundled cross-platform test
  suite.
- Source code, palettes and the bundled fan-art wallpaper have different terms.
  See [LICENSE](../LICENSE), [third-party notices](../THIRD-PARTY-NOTICES.md) and
  [asset provenance](../assets/README.md).

简要说明：目标为官方 Windows Desktop 0.2.1-rc.2。90 项界面回归和 5 项默认图片检查通过；
独立配置的正式安装包安装通过。干净 Desktop 启动到登录页，未复制凭证，也未声称完成空账号的全流程测试。
README 图片是实际插件控件的模拟预览，非 Desktop 实拍。已知限制与许可边界如上。
