"use client";
import ActivityTile from "./ActivityTile";
import { containerVariants, itemVariants } from "./AnimateGrid";
import CourseCard from "./CourseCard";
import HeroTile from "./HeroTile";
import { motion } from "framer-motion";
import LearningChart from "./LearningChart";

interface BentoGridProps {
  courses: any[];
}

const BentoGrid = ({ courses }: BentoGridProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-[minmax(255px,auto)]"
    >
      <motion.div variants={itemVariants} className="xl:col-span-2">
        <HeroTile />
      </motion.div>

      <motion.div variants={itemVariants} className="xl:col-span-2">
        <ActivityTile />
      </motion.div>

      <motion.div variants={itemVariants} className="xl:col-span-2">
        <LearningChart />
      </motion.div>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </motion.section>
  );
};

export default BentoGrid;
