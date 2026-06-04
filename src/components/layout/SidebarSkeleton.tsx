const SidebarSkeleton = () => {
  return (
    <aside className="hidden lg:flex flex-col p-6 border-r border-zinc-800 lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:overflow-hidden">
      <div className="mb-8 h-8 w-44 rounded-full bg-zinc-800 animate-pulse" />
      <div className="flex-1 min-h-0 space-y-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-12 rounded-xl bg-zinc-800 animate-pulse" />
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
