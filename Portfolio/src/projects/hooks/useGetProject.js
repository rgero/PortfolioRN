import { getProjectById } from '../../services/apiProjects';
import { useQuery } from '@tanstack/react-query';

export const useGetProject = (id) => {
  const {isLoading, data: project = {}, error} = useQuery({queryKey: ["project", id], queryFn: ()=>getProjectById(id), refetchInterval: false});
  return {isLoading, project, error};
};

export default useGetProject;