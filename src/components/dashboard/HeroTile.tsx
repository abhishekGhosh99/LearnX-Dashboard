const HeroTile = () => {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-500/50 blur-3xl" />

      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl" />

      <p className="text-zinc-400">Welcome Back</p>

      <h1 className="text-5xl font-bold mt-2">Abhishek👋</h1>

      <p className="mt-3 text-zinc-400">Ready to continue learning?</p>

      <div className="mt-8 inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-orange-400">
        🔥14 Streak
      </div>
    </article>
  );
};

export default HeroTile;
