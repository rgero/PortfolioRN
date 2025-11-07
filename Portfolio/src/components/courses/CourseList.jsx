import CourseCard from "./CourseCard";
import { FlatList } from "react-native";
import Subtitle from "../ui/Subtitle";
import { Text } from "react-native-paper";
import { useCourseContext } from "../../context/CourseContext";
import { useGetCourses } from "./hooks/useGetCourses";

const CourseList = ({ title, filterFn }) => {
  const { isLoading, courses, error } = useGetCourses();
  const { searchText } = useCourseContext();

  const searchTerm = searchText.toLowerCase();

  const filteredCourses = courses
    .filter(course =>
      course.name.toLowerCase().includes(searchTerm) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
    .filter(filterFn);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  if (courses.length === 0) return <Text>No courses found</Text>;

  return (
    <>
      <Subtitle>{title}</Subtitle>
      <FlatList
        data={filteredCourses}
        renderItem={({ item }) => (
          <CourseCard
            title={item.name}
            languages={item.tags}
            short={item.short}
            id={item.id}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default CourseList;
