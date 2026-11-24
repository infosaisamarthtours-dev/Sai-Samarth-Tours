import { ALL_PACKAGES } from '../data/packages';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { DESTINATIONS } from '../data/destinations';
import { Package } from '../types';
import { getPackageSlug } from './slugs';

/**
 * Validates whether a target internal path corresponds to a real registered route.
 */
export function isValidInternalUrl(path: string): boolean {
  if (!path || !path.startsWith('/')) return false;

  const normalized = path.replace(/\/+$/, '') || '/';

  // Core static routes
  const staticRoutes = [
    '/',
    '/tour-packages',
    '/pilgrimage-packages',
    '/pilgrimage-tour-packages',
    '/bus-packages',
    '/shirdi-packages',
    '/shirdi-tour-packages',
    '/domestic-packages',
    '/domestic-tour-packages',
    '/international-packages',
    '/international-tour-packages',
    '/senior-citizen-tour-packages',
    '/family-tour-packages-from-bangalore',
    '/group-tour-packages-from-bangalore',
    '/about',
    '/contact',
    '/blog',
    '/travel-resources',
    '/partners',
    '/faq',
    '/cancellation-policy',
    '/terms-of-use',
    '/privacy-policy'
  ];

  if (staticRoutes.includes(normalized)) return true;

  // Package routes (/package/:slug)
  if (normalized.startsWith('/package/')) {
    const pkgSlug = normalized.replace('/package/', '');
    return ALL_PACKAGES.some(p => p.id === pkgSlug || getPackageSlug(p) === pkgSlug);
  }

  // Blog routes (/blog/:slug)
  if (normalized.startsWith('/blog/')) {
    const blogSlug = normalized.replace('/blog/', '');
    return BLOG_POSTS.some(b => b.id === blogSlug || b.slug === blogSlug);
  }

  // Destination routes (/destinations/:slug)
  if (normalized.startsWith('/destinations/')) {
    const destSlug = normalized.replace('/destinations/', '');
    return Boolean(DESTINATIONS[destSlug]);
  }

  return false;
}

/**
 * Returns canonical URL for a package
 */
export function getCanonicalPackageUrl(pkgOrId: Package | string): string {
  if (typeof pkgOrId === 'string') {
    const found = ALL_PACKAGES.find(p => p.id === pkgOrId || getPackageSlug(p) === pkgOrId);
    return found ? `/package/${getPackageSlug(found)}` : `/package/${pkgOrId}`;
  }
  return `/package/${getPackageSlug(pkgOrId)}`;
}

/**
 * Returns canonical URL for a blog post
 */
export function getCanonicalBlogUrl(blogOrSlug: BlogPost | string): string {
  if (typeof blogOrSlug === 'string') {
    const found = BLOG_POSTS.find(b => b.id === blogOrSlug || b.slug === blogOrSlug);
    return found ? `/blog/${found.slug}` : `/blog/${blogOrSlug}`;
  }
  return `/blog/${blogOrSlug.slug}`;
}

/**
 * Returns canonical URL for a destination
 */
export function getCanonicalDestinationUrl(destId: string): string {
  const normalized = destId.toLowerCase().trim();
  return `/destinations/${normalized}`;
}

/**
 * Intelligent helper to find related tour packages for a blog post.
 */
export function getRelatedPackagesForBlog(post: BlogPost, limit = 3): Package[] {
  const results: Package[] = [];
  const addedIds = new Set<string>();

  // 1. Direct linked package
  if (post.relatedPackageId) {
    const directPkg = ALL_PACKAGES.find(p => p.id === post.relatedPackageId);
    if (directPkg) {
      results.push(directPkg);
      addedIds.add(directPkg.id);
    }
  }

  // 2. Keyword & destination matching
  const postText = `${post.title} ${post.tags.join(' ')} ${post.excerpt}`.toLowerCase();
  
  for (const pkg of ALL_PACKAGES) {
    if (addedIds.has(pkg.id)) continue;

    const destLower = pkg.destination.toLowerCase();
    const titleLower = pkg.title.toLowerCase();

    if (
      postText.includes(destLower) ||
      postText.includes(titleLower.split(' ')[0]) ||
      pkg.highlights.some(h => postText.includes(h.toLowerCase().slice(0, 10)))
    ) {
      results.push(pkg);
      addedIds.add(pkg.id);
      if (results.length >= limit) break;
    }
  }

  // 3. Fallback: Category matching
  if (results.length < limit) {
    const fallbackCategory = post.category.toLowerCase().includes('international')
      ? 'international'
      : post.category.toLowerCase().includes('domestic')
      ? 'domestic'
      : 'pilgrimage';

    for (const pkg of ALL_PACKAGES) {
      if (!addedIds.has(pkg.id) && pkg.category === fallbackCategory) {
        results.push(pkg);
        addedIds.add(pkg.id);
        if (results.length >= limit) break;
      }
    }
  }

  return results.slice(0, limit);
}

/**
 * Intelligent helper to find related blog articles for a tour package.
 */
export function getRelatedBlogsForPackage(pkg: Package, limit = 3): BlogPost[] {
  const results: BlogPost[] = [];
  const addedIds = new Set<string>();

  // 1. Blogs directly assigned to this package
  for (const blog of BLOG_POSTS) {
    if (blog.relatedPackageId === pkg.id) {
      results.push(blog);
      addedIds.add(blog.id);
      if (results.length >= limit) return results;
    }
  }

  // 2. Blogs matching destination or keywords
  const pkgTerms = [
    pkg.destination.toLowerCase(),
    pkg.title.toLowerCase(),
    ...pkg.highlights.map(h => h.toLowerCase())
  ];

  for (const blog of BLOG_POSTS) {
    if (addedIds.has(blog.id)) continue;

    const blogText = `${blog.title} ${blog.slug} ${blog.excerpt} ${blog.tags.join(' ')}`.toLowerCase();
    const isMatch = pkgTerms.some(term => term.length > 3 && blogText.includes(term));

    if (isMatch) {
      results.push(blog);
      addedIds.add(blog.id);
      if (results.length >= limit) return results;
    }
  }

  // 3. Fallback: Category match
  for (const blog of BLOG_POSTS) {
    if (!addedIds.has(blog.id)) {
      results.push(blog);
      addedIds.add(blog.id);
      if (results.length >= limit) return results;
    }
  }

  return results.slice(0, limit);
}
