import { Course } from "@/types/course";
import StatCard from "./StatCard";

interface Props {
  courses: Course[];
}

const AnalyticsStats = ({ courses }: Props) => {
  const totalCourses = courses.length;

  const completedCourses = courses.filter(
    (course) => course.progress === 100,
  ).length;

  const averageProgress = Math.round(
    courses.reduce((sum, course) => sum + course.progress, 0) / courses.length,
  );

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard title="Total Courses" value={String(totalCourses)} />
      <StatCard title="Average Progress" value={`${averageProgress}`} />
      <StatCard title="Completed" value={String(completedCourses)} />
      <StatCard title="Learning Streak" value="14 Days" />
    </div>
  );
};

export default AnalyticsStats;
