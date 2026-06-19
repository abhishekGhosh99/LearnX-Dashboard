"use client";

import { Course } from "@/types/course";
import AnalyticsStats from "./AnalyticsStats";
import WeeklyChart from "./WeeklyChart";
import ProgressDistribution from "./ProgressDistribution";
import CompletionRate from "./CompletionRate";

interface Props {
  courses: Course[];
}

const AnalyticsDashboard = ({ courses }: Props) => {
  return (
    <div className="space-y-6">
      <AnalyticsStats courses={courses} />

      <WeeklyChart courses={courses} />

      <div className="grid gap-6 lg:grid-cols-2">
        <ProgressDistribution courses={courses} />
        <CompletionRate courses={courses} />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
