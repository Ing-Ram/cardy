// Dynamic image mapper: imports all images from ../Pictures and
// exposes `getImageByName(name)` which finds the best match by
// normalizing names (lowercase + strip non-alphanumerics).
const images = {};

function normalize(str) {
  if (!str) return '';
  // Lowercase and remove any non-alphanumeric characters so
  // "Chad Ingram", "chad_ingram" and "chad-ingram" all map
  // to the same key: "chadingram".
  // console.log(`Normalizing string: ${String(str).toLowerCase().replace(/[^a-z0-9]/g, '')}`);  
  return String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
}

function importAll(r) {
  r.keys().forEach((key) => {
    // key looks like './chad_ingram.jpg'
    const fileName = key.replace(/^\.\//, '');
    const nameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
    const asset = r(key).default || r(key);
    console.log(`Imported image: ${fileName} as asset.`);
    // Register multiple lookup keys for robustness:
    // - normalized (remove non-alphanumeric)
    // - raw lowercase (keeps underscores/dashes)
    // - with separators removed (joins tokens)
    // - with separators turned into single spaces
    const rawLower = nameWithoutExt.toLowerCase();
    const noSeparators = rawLower.replace(/[_\s-]+/g, '');
    const spaceSeparated = rawLower.replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
    const norm = normalize(nameWithoutExt);

    // Use a Set to avoid duplicate keys
    const keys = new Set([norm, rawLower, noSeparators, spaceSeparated]);
    keys.forEach((k) => {
      if (k) images[k] = asset;
      // console.log(`Registered image key: ${k}`);
    });
  });
}

// Import all common image types from ../Pictures (non-recursive)
try {
  importAll(require.context('../Pictures', false, /\.(png|jpe?g|svg)$/));
} catch (e) {
  // If require.context isn't available, images will remain empty.
  // The consumer should provide a sensible fallback (e.g., placeholder).
  // We silently swallow here to avoid runtime errors during builds that
  // don't support require.context.
}

export function getImageByName(name) {
  const key = normalize(name);
  console.log(`getImageByName lookup for name: ${name}, normalized key: ${key}`);
  return images[key] || null;
}

export default getImageByName;
