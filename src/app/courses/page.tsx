import { getCourses } from "@/lib/getCourses";
import CoursesView from "./CoursesView";

const CoursesPage = async () => {
  const courses = await getCourses();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Courses</h1>

      <CoursesView courses={courses} />
    </div>
  );
};

export default CoursesPage;
