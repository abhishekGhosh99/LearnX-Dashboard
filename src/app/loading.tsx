import SidebarSkeleton from "@/components/layout/SidebarSkeleton";
import SkeletonCard from "@/components/ui/SkeletonCard";

const loading = () => {
  return (
    <main className="min-h-screen">
      <section className="grid lg:grid-cols-[260px_1fr] gap-6">
        <SidebarSkeleton />

        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <SkeletonCard className="h-60 xl:col-span-2" />
            <SkeletonCard className="h-60 xl:col-span-2" />

            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} className="h-52" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default loading;
