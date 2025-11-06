import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const clearSearch = () => {
    setSearchText('');
  }

  return (
    <CourseContext.Provider value={{ clearSearch, handleSearchChange, searchText, }}>
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