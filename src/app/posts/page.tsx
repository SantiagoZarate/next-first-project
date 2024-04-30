import { Suspense } from "react";
import { PostsList } from "./PostsList";
import { PostsLoader } from "./PostsLoader";

export default async function Pages() {
  return (
    <div className="flex flex-col gap-8 items-center ">
      <h1 className="text-xl font-bold capitalize">All posts</h1>
      <ul className="flex flex-col gap-4 w-full min-w-80">
        <Suspense fallback={<PostsLoader />}>
          <PostsList />
        </Suspense>
      </ul>
    </div>
  );
}
