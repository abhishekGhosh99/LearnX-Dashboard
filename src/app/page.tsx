import BentoGrid from "@/components/dashboard/BentoGrid";
import MobileNav from "@/components/layout/MobileNav";
import { getCourses } from "@/lib/getCourses";

const page = async () => {
  const courses = await getCourses();
  // console.log(courses);

  return (
    <div className="min-h-screen">
      <div className="p-6">
        <BentoGrid courses={courses} />
      </div>
      <MobileNav />
    </div>
  );
};

export default page;
