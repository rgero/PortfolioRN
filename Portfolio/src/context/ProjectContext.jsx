import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const clearSearch = () => {
    setSearchText('');
  }

  return (
    <ProjectContext.Provider value={{ clearSearch, handleSearchChange, searchText, }}>
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