"use client";

import { useMemo, useState } from "react";
import CourseCard from "@/components/dashboard/CourseCard";
import { Course } from "@/types/course";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface Props {
  courses: Course[];
}

const CoursesView = ({ courses }: Props) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("desc");

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    result = result.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase()),
    );

    if (filter === "completed") {
      result = result.filter((course) => course.progress >= 100);
    }

    if (filter === "progress") {
      result = result.filter((course) => course.progress < 100);
    }

    result.sort((a, b) =>
      sort === "desc" ? b.progress - a.progress : a.progress - b.progress,
    );

    return result;
  }, [courses, search, filter, sort]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-zinc-800 bg-zinc-900 pl-11 pr-4 py-3 outline-none"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-xl border border-zinc-800 bg-zinc-900 pl-4 pr-10 py-3"
        >
          <option value="all">All Courses</option>
          <option value="progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border border-zinc-800 bg-zinc-900 pl-4 pr-10 py-3"
        >
          <option value="desc">Highest Progress</option>
          <option value="asc">Lowest Progress</option>
        </select>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="rounded-xl bg-zinc-900 px-4 py-3">
          Total Courses: {courses.length}
        </div>

        <div className="rounded-xl bg-zinc-900 px-4 py-3">
          Completed: {courses.filter((course) => course.progress >= 100).length}
        </div>
      </div>

      <div className="grid gap-6 grid-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCourses.length === 0 ? (
          <div className="flex h-60 items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900">
            No courses found.
          </div>
        ) : (
          filteredCourses.map((course) => (
            <motion.div layout key={course.id}>
              <CourseCard key={course.id} course={course} />
            </motion.div>
          ))
        )}
      </div>
    </>
  );
};

export default CoursesView;
