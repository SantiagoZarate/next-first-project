import { Post } from "types";

type PostPageProps = {
  params: {
    id: string;
  };
};

export default async function PostId({ params }: PostPageProps) {
  const post = await fetch("https://dummyjson.com/posts/" + params.id);
  const data: Post = await post.json();

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
