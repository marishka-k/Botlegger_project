import { aboutText, partners } from '../../data/about';
import { asset } from '../../utils/asset';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './About.module.css';

// «О нас» + партнёры (87:26)
export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <SectionTitle id="about-title">О нас</SectionTitle>
      <div className={styles.about__body}>
        <div className={styles.about__text}>
          {aboutText.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul id="partners" className={styles.about__partners} aria-label="Партнёры и достижения">
          {partners.map((partner) => (
            <li key={partner.id} className={styles.about__partner}>
              <img
                className={styles.about__logo}
                src={asset(`images/${partner.image}`)}
                alt={partner.alt}
                width="245"
                height="120"
              />
              <span className={styles.about__label}>{partner.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
