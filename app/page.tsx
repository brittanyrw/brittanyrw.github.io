import ProjectCard from './components/ProjectCard';
import ProjectGroup from './components/ProjectGroup';
import Hero from './components/Hero';
import { projects } from './data/projects';

export default function Home() {
  return (
    <>
      <Hero pageName="home" />
      <main>
        {projects.map((group) => (
          <ProjectGroup 
            key={group.type} 
            title={group.type}
            type={group.type.replace(' ', '-')}
            bgColor={group.bgColor}
            backgroundImage={group.backgroundImage}
          >
            {group.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                technologies={project.technologies}
                links={project.links}
                workshops={project.workshops}
                // image={project.image}
                // gifImage={project.gifImage}
              />
            ))}
          </ProjectGroup>
        ))}
      </main>
    </>
  );
}