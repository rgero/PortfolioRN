import { getCourseById } from '../../../services/apiCourses';
import { useQuery } from '@tanstack/react-query';

export const useGetCourse = (id) => {
  const {isLoading, data: course = {}, error} = useQuery({queryKey: ["course", id], queryFn: ()=>getCourseById(id), refetchInterval: false});
  return {isLoading, course, error};
};

export default useGetCourse;