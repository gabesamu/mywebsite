import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';
import { rssFeedUrls } from '$src/store/BlogStore';
import { fetchPostsFromRss } from '$src/helpers/fetch-rss-posts';
import { type RssPost, PostStatus } from '$src/types/RssXml';

export const prerender = true;

// export const _loadPosts = (fetch?: (() => Promise<Response>),  feeds?: RssUrlList) => {
//   let fetchStatus: PostStatus = PostStatus.Loading;

//   // Get promise of all posts from array of RSS feeds
//   const posts: Promise<RssPost[]> = fetchPostsFromRss(feeds || get(rssFeedUrls), fetch);
//   // When resolved, update the store to save for later
//   posts
//     .then((resolvedPosts) => {
//       fetchStatus = PostStatus.Ready;
//       return blogStore.set(resolvedPosts);
//     })
//     .catch(() => {
//       fetchStatus = PostStatus.Errored;
//     });
//   // Return post prop, to render content
//   return { posts, fetchStatus };
// };

export const load: PageServerLoad = async ({ fetch }) => {
	console.log('loading blog posts');
	//   if (get(blogStore)?.length > 0) {
	//     return { posts: get(blogStore) };
	//   }
	//   return _loadPosts(fetch, feeds);

	let fetchStatus: PostStatus = PostStatus.Loading;

	try {
		const posts: RssPost[] = await fetchPostsFromRss(get(rssFeedUrls), fetch);
		fetchStatus = PostStatus.Ready;
		return { posts, fetchStatus };
	} catch (error) {
		fetchStatus = PostStatus.Errored;
		return { posts: [], fetchStatus };
	}
};
