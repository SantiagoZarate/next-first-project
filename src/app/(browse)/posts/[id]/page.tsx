import { notFound } from "next/navigation";
import { Post } from "types";

type PostPageProps = {
  params: {
    id: string;
  };
};

export default async function PostId({ params }: PostPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const post = await fetch("https://dummyjson.com/posts/" + params.id);
  const data: Post = await post.json();

  if (!data.title) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="mx-auto text-lg capitalize font-bold">{data.title}</h1>
      <p className="">{data.body}</p>
    </div>
  );
}
