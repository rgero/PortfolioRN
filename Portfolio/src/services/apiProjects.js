import { SUPABASE_BUCKET_URL } from '@env';
import supabase from "./supabase";

const baseImageURL = `${SUPABASE_BUCKET_URL}/project_images/`

export const getProjects = async () => {
  let query = supabase.from("projects").select("*");
  const {data, error} = await query;

  if (error)
  {
      console.error(error);
      throw new Error("Projects cannot be loaded");
  }
 
  return data;
}

export const getProjectById = async (id) => {
  console.log(id);
  let query = supabase.from("projects").select("*").eq("id", id);
  const {data, error} = await query;

  if (error)
  {
      console.error(error);
      throw new Error("Project cannot be loaded");
  }
  return data[0];
}