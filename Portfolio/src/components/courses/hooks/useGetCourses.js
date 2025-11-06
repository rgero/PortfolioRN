import { getCourses } from "../../../services/apiCourses";
import { useQuery } from "@tanstack/react-query";

export const useGetCourses = () => {
  const {isLoading, data: courses = [], error, refetch} = useQuery({queryKey: ["courses"], queryFn: ()=> getCourses()});
  return { isLoading, courses, error, refetch};
}