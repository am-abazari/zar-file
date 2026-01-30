function SanitizeFilename(filename: string): string {
  // Remove dangerous characters, control chars, etc.
  return filename
    .replace(/[\/\\?%*:|"<>']/g, "_") // most dangerous filesystem chars
    .replace(/\s+/g, "_") // spaces → underscore
    .replace(/[^a-zA-Z0-9._-]/g, "") // keep only safe chars + dot & dash & underscore
    .replace(/_+/g, "_") // no repeated underscores
    .replace(/^\.+|\.+$/g, "") // no leading/trailing dots
    .trim();
}

export default SanitizeFilename