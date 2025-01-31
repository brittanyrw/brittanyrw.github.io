import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}

const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: faGithub
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: faLinkedin
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: faTwitter
  }
];

export default function Footer() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>about me</h2>
        <p>
          Brittany Walker is a software engineer, instructor and musical theater
          fan.
        </p>
        <p>
          She is very involved in the DC tech community As a Front End Lead for
          Women Who Code DC and was an Instructor for a free weekly coding
          workshop for Thinkful.
        </p>
        <div className="social-media-links">
          <ul>
          {socialLinks.map((link) => (
            <li key={link.platform}><a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.platform}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a></li>
          ))}
          </ul>
        </div>
        <p>© {new Date().getFullYear()} | Built with Next.js</p>
      </div>
    </section>
  );
}