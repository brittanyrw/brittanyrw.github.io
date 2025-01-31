// 'use client'
// import Image from 'next/image';
// import { useState } from 'react'

interface WorkshopElement {
  type: 'span' | 'link' | 'text';
  text: string;
  href?: string;
}

interface Workshop {
  elements: WorkshopElement[];
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  links?: {
    website?: string;
    code?: string;
  };
  workshops?: Workshop[];
  // image?: string;
  // gifImage?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  links,
  workshops,
  // image,
  // gifImage
}: ProjectCardProps) {
  // console.log('ProjectCard props:', { title, workshops });
  // console.log('Image', image)
  // console.log('Gif', gifImage)
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="project">
      <div className="playbill">
        <header>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </header>
        {/* {image && (
          <div className="project-image">
            <Image
              src={image}
              alt={`${title} project screenshot`}
              width={400}
              height={300}
              objectFit="cover"
              priority
            />
          </div>
        )} */}
        {/* {(image || gifImage) && (
        <div 
          className="project-image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered && gifImage ? gifImage : image}
            alt={`${title} project ${isHovered ? 'demonstration' : 'screenshot'}`}
            width={400}
            height={300}
            className={`transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            priority
          />
        </div>
      )} */}
        <div className="playbill-content">
          <div className="terminal">
            <div className="terminal-content">
              <p>{description}</p>
            

            {workshops && workshops.length > 0 && (
                <ul>
                  {workshops.map((workshop, index) => {
                    const textElement = workshop.elements.find(el => el.type === 'text');

                    if (textElement) {
                      return (
                        <li key={index}>
                          <p className="workshop-text">{textElement.text}</p>
                        </li>
                      );
                    }
                    const linkElement = workshop.elements.find(el => el.type === 'link');
                    const spanElement = workshop.elements.find(el => el.type === 'span');

                    return (
                      <li key={index}>
                        <a href={linkElement?.href || '#'} className="workshop-link">
                          {spanElement && (
                            <span className="highlight">{spanElement.text}</span>
                          )}
                          {linkElement?.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
            )}

            {technologies.length > 0 && (
              <ul className="technologies">
                {technologies.map((tech, index) => (
                  <li key={index} className="tech-item">
                    built using: {tech}
                  </li>
                ))}
              </ul>
            )}

            {links && (
              <div className="playbill-links">
                {links.website && (
                  <a href={links.website}>
                    {links.website === 'view on codepen' ? 'view on codepen' : 'website'}
                  </a>
                )}
                {links.code && (
                  <a href={links.code}>
                    code
                  </a>
                )}
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}