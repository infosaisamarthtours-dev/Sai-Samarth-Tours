import { BlogPost } from './types';
import { shirdiVipDarshanGuidePost } from './shirdi-vip-darshan-guide';
import { kashiAyodhyaPrayagrajGuidePost } from './kashi-ayodhya-prayagraj-guide';
import { singaporeMalaysiaFamilyGuidePost } from './singapore-malaysia-family-guide';
import { chardhamYatraGuidePost } from './chardham-yatra-guide';
import { kashmirParadiseSeasonsGuidePost } from './kashmir-paradise-seasons-guide';
import { templePrasadamRitualsGuidePost } from './temple-prasadam-rituals-guide';

export * from './types';
export { shirdiVipDarshanGuidePost } from './shirdi-vip-darshan-guide';
export { kashiAyodhyaPrayagrajGuidePost } from './kashi-ayodhya-prayagraj-guide';
export { singaporeMalaysiaFamilyGuidePost } from './singapore-malaysia-family-guide';
export { chardhamYatraGuidePost } from './chardham-yatra-guide';
export { kashmirParadiseSeasonsGuidePost } from './kashmir-paradise-seasons-guide';
export { templePrasadamRitualsGuidePost } from './temple-prasadam-rituals-guide';

export const BLOG_POSTS: BlogPost[] = [
  shirdiVipDarshanGuidePost,
  kashiAyodhyaPrayagrajGuidePost,
  singaporeMalaysiaFamilyGuidePost,
  chardhamYatraGuidePost,
  kashmirParadiseSeasonsGuidePost,
  templePrasadamRitualsGuidePost
];

export function getBlogPostByIdOrSlug(identifier: string): BlogPost | undefined {
  if (!identifier) return undefined;
  const clean = identifier.toLowerCase().trim();
  return BLOG_POSTS.find(post => 
    post.id.toLowerCase() === clean || 
    post.slug.toLowerCase() === clean
  );
}
