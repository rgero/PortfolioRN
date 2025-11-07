import CourseCard from "./CourseCard"
import { FlatList } from "react-native";
import { Text } from "react-native-paper";
import { useCourseContext } from "../../context/CourseContext";
import { useGetCourses } from "./hooks/useGetCourses";

const CourseList = () => {
  const {isLoading, courses, error} = useGetCourses();
  const {searchText} = useCourseContext();

  const filteredCourses = courses.filter(course => {
    const searchTerm = searchText.toLowerCase();
    return (
      course.name.toLowerCase().includes(searchTerm) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });

  if (isLoading) return <Text>Loading...</Text>
  if (courses.length === 0) return <Text>No courses found</Text>
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <FlatList
      data={filteredCourses}
      renderItem={({item}) => <CourseCard title={item.name} languages={item.tags} short={item.short} id={item.id} />}
      keyExtractor={item => item.id}
    />
  )
}

export default CourseList
