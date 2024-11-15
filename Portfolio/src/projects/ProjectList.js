import ProjectCard from "./ProjectCard"
import { ScrollView } from "react-native-web"

const projectList = [
  {title: "Project 1", language: "React Native", short: "This is a short description of the project"},
  {title: "Project 2", language: "React", short: "This is a short description of the project"},
  {title: "Project 3", language: "C#", short: "This is a short description of the project"},
  {title: "Project 4", language: "Python", short: "This is a short description of the project"},
  {title: "Project 5", language: "Photoshop", short: "This is a short description of the project"},
]

// Fucking hell, scrolling.

const ProjectList = () => {
  return (
    <ScrollView style={{width: "100%"}}>
      {projectList.map((project, index) => (
        <ProjectCard key={index} index={index} title={project.title} language={project.language} short={project.short} />
      ))}
    </ScrollView>
  )
}

export default ProjectList
