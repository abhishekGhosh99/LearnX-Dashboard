import { useEffect, useState } from "react";

const ActivityTile = () => {
  const [activity, setActivity] = useState<number[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 49 }, () =>
      Math.floor(Math.random() * 4),
    );
    setActivity(data);
  }, []);

  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="font-semibold mb-5">Learning Activity</h2>

      <div className="grid grid-cols-7 gap-2">
        {activity.map((level, index) => (
          <div className="flex items-center justify-center" key={index}>
            <div
              className={`h-4 w-4 rounded-sm ${
                level === 0
                  ? "bg-zinc-800"
                  : level === 1
                  ? "bg-cyan-500/30"
                  : level === 2
                  ? "bg-cyan-500/60"
                  : "bg-cyan-500"
              }`}
            />
          </div>
        ))}
      </div>
    </article>
  );
};

export default ActivityTile;
