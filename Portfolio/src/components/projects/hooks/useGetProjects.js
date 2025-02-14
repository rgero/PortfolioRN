import { getProjects } from "../../../services/apiProjects";
import { useQuery } from "@tanstack/react-query";

export const useGetProjects = () => {
  const {isLoading, data: projects = [], error, refetch} = useQuery({queryKey: ["projects"], queryFn: ()=> getProjects()});
  return { isLoading, projects, error, refetch};
}