import { getCourses } from "@/lib/getCourses";
import AnalyticsDashboard from "./AnalyticsDashboard";

const AnalyticsPage = async () => {
  const courses = await getCourses();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Analytics</h1>

      <AnalyticsDashboard courses={courses} />
    </div>
  );
};

export default AnalyticsPage;
