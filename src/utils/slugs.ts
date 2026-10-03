import { Package } from '../types';

/**
 * Canonical SEO Slug Mapping for all Sai Samarth Tours packages.
 * Targets the high-converting keyword pattern: [destination]-tour-package-from-bangalore
 */
export const PACKAGE_SLUG_MAP: Record<string, string> = {
  // Shirdi Packages
  'shirdi-regular': 'shirdi-tour-package-from-bangalore',
  'shirdi-via-pune': 'shirdi-via-pune-tour-package-from-bangalore',
  'shirdi-via-mumbai': 'shirdi-via-mumbai-tour-package-from-bangalore',
  'shirdi-2-jyothirlinga': 'shirdi-with-2-jyotirlinga-tour-package-from-bangalore',
  'shirdi-3-jyothirlinga': 'shirdi-with-3-jyotirlinga-tour-package-from-bangalore',

  // Pilgrimage Packages
  'kashi-ayodhya-prayagraj': 'kashi-ayodhya-prayagraj-tour-package-from-bangalore',
  'kashi-ayodhya': 'kashi-ayodhya-tour-package-from-bangalore',
  'kholapur-pandarpur': 'kolhapur-pandharpur-tour-package-from-bangalore',
  'puri-jagannath': 'puri-jagannath-konark-tour-package-from-bangalore',
  'kamakhya': 'kamakhya-temple-tour-package-from-bangalore',
  'indore-ujjain': 'indore-ujjain-omkareshwar-tour-package-from-bangalore',
  'vaishnodevi': 'vaishnodevi-golden-temple-tour-package-from-bangalore',
  'baidyanath': 'baidyanath-dham-tour-package-from-bangalore',
  'rameshwaram': 'rameshwaram-madurai-kanyakumari-tour-package-from-bangalore',
  'gujarat': 'grand-gujarat-somnath-dwarka-tour-package-from-bangalore',
  'nepal': 'nepal-muktinath-pashupatinath-tour-package-from-bangalore',

  // Domestic Packages
  'kashmir': 'kashmir-tour-package-from-bangalore',
  'kerala': 'kerala-tour-package-from-bangalore',
  'leh-ladakh': 'leh-ladakh-tour-package-from-bangalore',
  'rajasthan': 'rajasthan-tour-package-from-bangalore',
  'himachal': 'himachal-pradesh-tour-package-from-bangalore',
  'goa': 'goa-beach-tour-package-from-bangalore',
  'andaman': 'andaman-islands-tour-package-from-bangalore',
  'golden-triangle': 'golden-triangle-delhi-agra-jaipur-tour-package-from-bangalore',

  // International Packages
  'thailand-regular': 'thailand-tour-package-from-bangalore',
  'singapore-malaysia': 'singapore-malaysia-tour-package-from-bangalore',
  'malaysia-regular': 'malaysia-tour-package-from-bangalore',
  'maldives': 'maldives-tour-package-from-bangalore',
  'bhutan': 'bhutan-tour-package-from-bangalore',
  'sri-lanka': 'sri-lanka-tour-package-from-bangalore',
  'bali': 'bali-tour-package-from-bangalore',
  'dubai': 'dubai-tour-package-from-bangalore',
  'europe': 'europe-tour-package-from-bangalore'
};

// Inverted lookup map (slug -> package ID)
export const SLUG_TO_PACKAGE_ID_MAP: Record<string, string> = Object.entries(PACKAGE_SLUG_MAP).reduce(
  (acc, [id, slug]) => {
    acc[slug] = id;
    return acc;
  },
  {} as Record<string, string>
);

/**
 * Returns the canonical SEO slug for a package.
 */
export function getPackageSlug(pkg: Package): string {
  if (pkg.slug) return pkg.slug;
  if (PACKAGE_SLUG_MAP[pkg.id]) return PACKAGE_SLUG_MAP[pkg.id];
  // Fallback: sanitized title + from-bangalore
  return `${pkg.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-from-bangalore`;
}

/**
 * Returns the canonical URL path for a package.
 */
export function getPackageUrl(pkg: Package): string {
  return `/package/${getPackageSlug(pkg)}`;
}

/**
 * Finds a package by either its short ID (e.g. 'shirdi-regular') or descriptive SEO slug (e.g. 'shirdi-tour-package-from-bangalore').
 */
export function findPackageBySlugOrId(allPackages: Package[], slugOrId: string | undefined): Package | undefined {
  if (!slugOrId) return undefined;

  const normalized = slugOrId.toLowerCase().trim();

  // 1. Direct ID match
  const byId = allPackages.find(p => p.id.toLowerCase() === normalized);
  if (byId) return byId;

  // 2. Slug map lookup
  const mappedId = SLUG_TO_PACKAGE_ID_MAP[normalized];
  if (mappedId) {
    const byMappedId = allPackages.find(p => p.id === mappedId);
    if (byMappedId) return byMappedId;
  }

  // 3. Package property slug match
  const byPropSlug = allPackages.find(p => p.slug && p.slug.toLowerCase() === normalized);
  if (byPropSlug) return byPropSlug;

  // 4. Fuzzy title match (e.g. contains destination)
  const byFuzzy = allPackages.find(p => {
    const generatedSlug = getPackageSlug(p);
    return generatedSlug === normalized || generatedSlug.replace(/-from-bangalore$/, '') === normalized;
  });

  return byFuzzy;
}
