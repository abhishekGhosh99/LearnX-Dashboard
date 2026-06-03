import { supabase } from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase.from("courses").select("*");

  // console.log("DATA:", data);
  // console.log("ERROR:", error);

  if (error) throw error;

  return data ?? [];
}
