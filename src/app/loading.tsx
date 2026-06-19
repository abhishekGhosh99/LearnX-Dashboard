import SkeletonCard from "@/components/ui/SkeletonCard";

const loading = () => {
  return (
    <div className="min-h-screen">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SkeletonCard className="h-60 xl:col-span-2" />
        <SkeletonCard className="h-60 xl:col-span-2" />

        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} className="h-52" />
        ))}
      </div>
    </div>
  );
};

export default loading;
