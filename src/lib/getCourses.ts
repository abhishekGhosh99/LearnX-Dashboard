import { supabase } from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase.from("courses").select("*");

  // console.log("data:", data);
  // console.log("error:", error);

  if (error) throw error;

  return data ?? [];
}
