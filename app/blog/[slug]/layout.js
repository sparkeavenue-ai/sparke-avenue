import { getPost } from "../posts";

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Sparke Avenue Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostLayout({ children }) {
  return children;
}
