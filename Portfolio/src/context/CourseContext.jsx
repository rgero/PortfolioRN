import { createContext, useContext, useState } from "react";

import { getCourses } from "../services/apiCourses";
import { useQuery } from "@tanstack/react-query";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const {isLoading, data: courses = [], error, refetch} = useQuery({queryKey: ["courses"], queryFn: getCourses});
  const [searchText, setSearchText] = useState('');
  const [completionStatus, setCompletionStatus] = useState(1);

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const clearSearch = () => {
    setSearchText('');
  }

  const completedCourses = courses.filter( (course) => {
    return (
      course.name.toLowerCase().includes(searchText.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchText.toLowerCase()))
    ) && course.status && course.status === 1
  })

  const inProgressCourses = courses.filter( (course) => {
    return (
      course.name.toLowerCase().includes(searchText.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchText.toLowerCase()))
    ) && course.status && course.status !== 1
  })

  return (
    <CourseContext.Provider value={
        {
          clearSearch,
          completedCourses,
          error,
          handleSearchChange, 
          inProgressCourses,
          isLoading,
          refetch,
          searchText,
          setCompletionStatus
        }
      }
    >
      {children}
    </CourseContext.Provider>
  );
}

const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
}

export { CourseProvider, useCourseContext };