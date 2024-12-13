const allowedShorteningServices = [
  "shorturl.at",
  "tinyurl.com",
  "bit.ly",
  "t.co",
  "short.ly"
];

function isAllowedShortenedUrl(url) {
  return allowedShorteningServices.some(service => url.includes(service));
}

function isSuspiciousUrl(url) {
  const suspiciousPatterns = [
    /admin/i,
    /login/i,
    /\?[^=]*=.*admin.*/i,
    /#.*login.*/i,
    /%00/i, // Null byte attack
    /\.\./i // Directory traversal
  ];

  return suspiciousPatterns.some(pattern => pattern.test(url));
}

function isValidUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "https:";
  } catch (error) {
    return false;
  }
}
