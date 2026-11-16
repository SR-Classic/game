# Security policy

## Reporting a vulnerability

Found a way to cheat, crash the server, read someone else's account or anything
else that should not be possible? Tell us privately before you tell anyone
else: open this repository's **Security** tab and choose **Report a
vulnerability**. Do not open a public issue and do not post it in chat.

Include the affected part of the game, what an attacker gains, the steps to
reproduce it and, when safe, a minimal proof of concept. Never include live
credentials, account data, private keys or game assets.

## Supported code

Fixes target the default branch, which is what the SR:Classic servers run.

The server must be built with the Go release declared in `apps/server/go.mod`
or a newer patched release. CI runs `govulncheck` as a blocking gate; reviewed
exceptions are recorded in
[ACCEPTED_ADVISORIES.md](https://github.com/SR-Classic/game/blob/main/docs/security/ACCEPTED_ADVISORIES.md).
