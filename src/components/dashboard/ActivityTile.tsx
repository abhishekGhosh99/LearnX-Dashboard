const ActivityTile = () => {
  const activity = Array.from({ length: 39 }, () =>
    Math.floor(Math.random() * 6),
  );

  return (
    <article className="rounded-3xl bg-zinc-900 p-6">
      <h2 className="font-semibold mb-4">Activity</h2>

      <div className="grid grid-cols-7 gap-2">
        {activity.map((level, index) => (
          <div
            className={`h-4 w-4 rounded-sm ${level === 0 ? "bg-zinc-800" : level === 1 ? "bg-cyan-500/20" : level === 2 ? "bg-cyan-500/50" : "bg-cyan-500"}`}
            key={index}
          />
        ))}
      </div>
    </article>
  );
};

export default ActivityTile;
