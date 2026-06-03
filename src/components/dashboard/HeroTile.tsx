const HeroTile = () => {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-zinc-800 col-span-2 bg-zinc-900 p-8">
      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-500/50 blur-3xl" />

      <p className="text-zinc-400">Welcome Back</p>

      <h1 className="text-5xl font-bold mt-2">Abhishek👋</h1>

      <div className="mt-8 inline-flex rounded-full bg-orange-500/10 px-4 py-2">
        🔥14 Streak
      </div>
    </article>
  );
};

export default HeroTile;
