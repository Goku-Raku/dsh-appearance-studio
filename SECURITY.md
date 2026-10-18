# Privacy, credentials and reporting

Appearance Studio does not require a GitHub token, DeepSeek API key, NovelAI
token, model credential, subscription or login of its own. The host application's
authentication is separate. Never paste credentials into plugin settings or
public issues. The release includes no author's profile, conversations, account
configuration, local credential store or generation requests.

## Local data

- Plugin appearance preferences and uploaded images are stored in the Desktop
  renderer's `localStorage`, under `dsh.appearance-studio.v2`; legacy v1 data may
  be migrated. Font family, size and theme mode use the host's preference API.
- Uploaded images are converted locally to a data URI; the long edge is reduced
  to at most 1400 px. Browser storage is finite and its quota varies. Prefer
  images below 2 MB. The plugin does not encrypt local appearance preferences.
- The plugin code makes no network requests and runs no shell commands. The
  host, package installation, external license links and explicit font-access
  permission requests have their own behavior. This is not a claim that DSH is
  offline or that all other plugins are private.
- System fonts are requested only when Refresh system fonts is clicked. Refusal
  leaves the existing catalog intact; a font name can be entered manually.
- Switching a preset does not discard the previous custom colors or image.
  Disabling removes active styles; stored preferences are retained for re-enable.

## Report a problem

Use the [issue tracker](https://github.com/Goku-Raku/dsh-appearance-studio/issues)
for non-sensitive bug reports. Include the exact Desktop version, operating
system, plugin version, selected theme and minimal reproduction. Remove account
details, paths, conversation content and credentials from screenshots/logs.
Do not publicly post secrets or an exploit involving private data. If GitHub
private vulnerability reporting is available, use the repository's Security tab.
No response-time guarantee or professional security audit is claimed.
