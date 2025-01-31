import Image from 'next/image';

interface ProjectGroupProps {
  title: string;
  children: React.ReactNode;
  type: string;
  bgColor?: string;
  backgroundImage?: string;
}

export default function ProjectGroup({ 
  title, 
  children, 
  type,
  bgColor,
  backgroundImage
}: ProjectGroupProps) {
  return (
    <section 
      id={type.toLowerCase().replace(' ', '-')}
      className={`project-group ${type}`}
      style={{ 
        backgroundColor: bgColor
      } as React.CSSProperties}
    >
      {backgroundImage && (
        <div className="background-icon">
          <Image
            src={backgroundImage}
            alt=""
            width={300}
            height={300}
            priority
          />
        </div>
      )}
      <div className="project-container">
        <h2>{title}</h2>
        <div className="projects-wrapper">
          {children}
        </div>
      </div>
    </section>
  );
}