import BentoGrid from "@/components/dashboard/BentoGrid";
import MobileNav from "@/components/layout/MobileNav";
import Sidebar from "@/components/layout/Sidebar";
import { getCourses } from "@/lib/getCourses";

const page = async () => {
  const courses = await getCourses();
  // console.log(courses);

  return (
    <main className="min-h-screen">
      <section className="grid lg:grid-cols-[260px_1fr]">
        <Sidebar />

        <div className="p-6">
          <BentoGrid courses={courses} />
        </div>
        <MobileNav />
      </section>
    </main>
  );
};

export default page;
