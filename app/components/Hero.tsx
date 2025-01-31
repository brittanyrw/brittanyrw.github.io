import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

interface HeroProps {
  pageName: 'home' | 'experience';
}

export default function Hero({ pageName }: HeroProps) {
  return (
    <section className="hero">
      <section className="side-header">
        <div className="me">
          <h3><a href="https://musicalwebdev.com">brittany walker</a></h3>
          <p>developer advocate</p>
        </div>
      </section>
      <section className="hero-playbill">
        <section className="marquee">
          <div className="lyrics">
            <span>i am not throwing away my shot <FontAwesomeIcon icon={faMusic} /></span>
            <span>
              all we see is sky for forever, we let the world pass by for
              forever <FontAwesomeIcon icon={faMusic} /></span>
            <span>
              stare down the odds and seize the day <FontAwesomeIcon icon={faMusic} /></span>
            <span> i miss the mountains <FontAwesomeIcon icon={faMusic} /></span>
            <span>
              what would i do if i had not met you? <FontAwesomeIcon icon={faMusic} /></span>
            <span>
              but most of all, im thankful for lovin who i really am
              <FontAwesomeIcon icon={faMusic} /></span>
            <span>
              they say we are asleep until we fall in love, we are children of
              dust and ashes <FontAwesomeIcon icon={faMusic} /></span>
            <span> telephone wire, long black line</span>
          </div>
        </section>
        <section className="playbill-container">
          <div className="playbill">
            <header>
              <h2>Playbill</h2>
              <h3>The World Wide Web</h3>
            </header>
            <div className="playbill-content">
              <h1>Musical Web Dev</h1>
            </div>
            <div className="terminal">
              <div className="terminal-content">
                <ul>
                  <li>~<FontAwesomeIcon icon={faMusic} /> cd Sites</li>
                  <li>~/Sites <FontAwesomeIcon icon={faMusic} /> mkdir musicals</li>
                  <li>~/Sites <FontAwesomeIcon icon={faMusic} /> cd musicals</li>
                  <li>
                    ~/Sites/musicals <FontAwesomeIcon icon={faMusic} /> touch songs.js
                  </li>
                  <li>
                    ~/Sites/musicals <FontAwesomeIcon icon={faMusic} /> <span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="main-navigation">
        <header>
          <h2>projects</h2>
        </header>
        <Navigation pageName={pageName} />
      </section>
    </section>
  );
}