interface SkeletonCardProps {
  className?: string;
}

const SkeletonCard = ({ className = "" }: SkeletonCardProps) => {
  return (
    <article className={`animate-pulse overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 ${className}`}>
      <div className="mb-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-zinc-800" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded-full bg-zinc-800" />
          <div className="h-3 w-1/2 rounded-full bg-zinc-800" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-4 rounded-full bg-zinc-800" />
        <div className="h-4 w-5/6 rounded-full bg-zinc-800" />
        <div className="h-4 w-2/3 rounded-full bg-zinc-800" />
      </div>

      <div className="mt-8 space-y-3">
        <div className="h-4 rounded-full bg-zinc-800" />
        <div className="h-4 rounded-full bg-zinc-800" />
      </div>

      <div className="mt-8 h-11 w-28 rounded-2xl bg-zinc-800" />
    </article>
  );
};

export default SkeletonCard;
