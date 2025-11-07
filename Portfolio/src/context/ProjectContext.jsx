import { createContext, useContext, useState } from "react";

import { getProjects } from "../services/apiProjects";
import { useQuery } from "@tanstack/react-query";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const {isLoading, data = [], error, refetch} = useQuery({queryKey: ["projects"], queryFn: getProjects});
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const clearSearch = () => {
    setSearchText('');
  }

  const projects = data.filter(project => {
    const searchTerm = searchText.toLowerCase();
    return (
      project.name.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });

  return (
    <ProjectContext.Provider value={
        {
          clearSearch,
          error,
          handleSearchChange, 
          isLoading,
          projects,
          refetch,
          searchText,
        }
      }
    >
      {children}
    </ProjectContext.Provider>
  );
}

const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
}

export { ProjectProvider, useProjectContext };