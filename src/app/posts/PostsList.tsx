import Link from "next/link";
import { ApiGetPostsResponse, Post } from "types";

export async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const posts = await fetch("https://dummyjson.com/posts?limit=4");
  const rawData: ApiGetPostsResponse = await posts.json();
  const data = rawData.posts;

  return (
    <>
      {data.map((post) => (
        <Link
          className="hover:-translate-y-1 transition"
          key={post.id}
          href={"posts/" + post.id}
        >
          {post.title}
        </Link>
      ))}
    </>
  );
}
