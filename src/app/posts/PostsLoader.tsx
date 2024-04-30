export function PostsLoader() {
  return (
    <>
      {Array(4)
        .fill(1)
        .map((i) => (
          <div
            key={i}
            className="h-6 bg-stone-400 rounded-lg w-full animate-pulse"
          />
        ))}
    </>
  );
}
