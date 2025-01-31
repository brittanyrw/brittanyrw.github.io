import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <>
      <Hero pageName="experience"/>
      <main className="projects" id="experience">
        <section className="project-container">
        <div className="projects-wrapper">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={`${exp.title}-${index}`}
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
              details={exp.details}
              links={exp.links}
              document={exp.document} 
              video={exp.video}          
            />
          ))}
        </div>
        </section>
      </main>
    </>
)}