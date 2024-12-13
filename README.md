# checkURL

Simple, privacy focused chromium-based extension that converts URLs to uppercase and unshorten URLs.

This extension works by performing URL checks without actually loading the webpage fully.

## Why?

URLs can look identical, but they may be totally different. The letters I (uppercase i) and l (lowercase L) look the same, but are not the same characters.

CheckURL provides an easy way to verify URLs by simply converting them uppercase and resolving shortened URLs.

## Checks

- `isSuspiciousUrl` - warns about URLs that contain
  - `admin`
  - `login`
  - null byte (`%00`) (just in case)
  - directory traversal (`../`)
- `isValidUrl` - makes sure that only `HTTPS` URLs are allowed
- `isAllowedShortenedUrl` - verifies shortened URLs come from recognized shortening services:
  - shorturl.at
  - tinyurl.com
  - bit.ly
  - t.co
  - short.ly

### TODO: Finish text and release extension
