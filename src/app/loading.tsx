const loading = () => {
  return (
    <main className="p-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse rounded-3xl bg-zinc-800" />
        ))}
      </div>
    </main>
  );
};

export default loading;
