import Image from 'next/image';

interface DetailElement {
    type: 'span' | 'link' | 'text';
    text: string;
    href?: string;
}

interface Detail {
    elements: DetailElement[];
}

interface ExperienceCardProps {
    title: string;
    subtitle: string;
    description: string;
    details?: Detail[];
    links?: {
        website?: string;
        code?: string;
        video?: string;
        slides?: string;
    },
    document: string;
    video: string;
}

export default function ExperienceCard({
    title,
    subtitle,
    description,
    details,
    links,
    document,
    video
}: ExperienceCardProps) {
    return (
        <div className="project">
            <div className="playbill">
                <header>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </header>
                {document && (
                    <div className="project-image">
                        <Image
                            src={document}
                            alt={`${title} experience screenshot`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                )}
                {video && (
                    <video controls height="" width="100%">
                        <source src={video} type="video/mp4" />
                    </video>
                )}
                <div className="playbill-content">
                    <div className="terminal">
                        <div className="terminal-content">
                            {description && (
                                <p>{description}</p>
                            )}

                            {details && details.length > 0 && (
                                <ul>
                                    {details.map((detail, index) => {
                                        const textElement = detail.elements.find(el => el.type === 'text');

                                        if (textElement) {
                                            return (
                                                <li key={index}>
                                                    <p className="workshop-text">{textElement.text}</p>
                                                </li>
                                            );
                                        }
                                        const linkElement = detail.elements.find(el => el.type === 'link');
                                        const spanElement = detail.elements.find(el => el.type === 'span');

                                        return (
                                            <li key={index}>
                                                <a href={linkElement?.href || '#'} target="_blank" className="workshop-link">
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
                        </div>
                    </div>
                    {links && (
                        <div className="playbill-links">
                            {links.website && (
                                <a href={links.website} target="_blank">
                                    {links.website === 'view on codepen' ? 'view on codepen' : 'website'}
                                </a>
                            )}
                            {links.code && (
                                <a href={links.code} target="_blank">
                                    code
                                </a>
                            )}
                            {links.video && (
                                <a href={links.video} target="_blank">
                                    video
                                </a>
                            )}
                            {links.slides && (
                                <a href={links.slides} target="_blank">
                                    slides
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}