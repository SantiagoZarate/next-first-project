export default function LoadingPostPage() {
  return (
    <div className="w-full flex flex-col gap-6 animate-pulse">
      <h1 className="mx-auto w-40 h-8 bg-stone-400 text-lg rounded-lg capitalize font-bold"></h1>
      <ul className="flex flex-col gap-2">
        <p className="w-full h-4 bg-stone-400 rounded-lg" />
        <p className="w-full h-4 bg-stone-400 rounded-lg" />
        <p className="w-full h-4 bg-stone-400 rounded-lg" />
        <p className="w-1/2 h-4 bg-stone-400 rounded-lg" />
      </ul>
    </div>
  );
}
