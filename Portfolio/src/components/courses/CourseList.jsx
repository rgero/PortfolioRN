import CourseCard from "./CourseCard";
import { FlatList } from "react-native";
import Subtitle from "../ui/Subtitle";

const CourseList = ({ title, courses }) => {
  return (
    <>
      <Subtitle>{title}</Subtitle>
      <FlatList
        data={courses}
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
