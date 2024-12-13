# checkURL

Simple, privacy focused chromium-based extension that converts URLs to uppercase and unshorten URLs.

This extension works by performing URL checks without actually fully loading the webpage.

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

## Fully Local

This extension is fully hosted locally giving the user full control. No third-party servers are involved, enhancing security and privacy.

## Download

To use the extension, simply download the `.zip` file from the releases tab, extract it and load it as an unpacked extension in your browser.

## License

This project is open-source and fully under your control. You are free to use, modify and distribute the extension as you see fit.
However, I am not responsible or liable for any consequences that arise from using this extension. Use it at your own risk.
