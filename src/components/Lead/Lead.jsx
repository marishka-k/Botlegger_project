import { lead } from '../../data/content';
import { asset } from '../../utils/asset';
import Button from '../Button/Button';
import styles from './Lead.module.css';

// Первый экран (30:19) + фото робота в ТЦ справа (317:156) с растушёвкой (61:15, 317:158).
// На мобильной фото — фон под текстом (368:826)
export default function Lead() {
  return (
    <section className={styles.lead} aria-labelledby="lead-title">
      <div className={styles.lead__photo}>
        <picture>
          {/* Мобильная: более широкий кадр исходного фото, робот по центру */}
          <source media="(max-width: 1023px)" srcSet={asset('images/hero-robot-mobile.webp')} width="750" height="748" />
          <img
            className={styles.lead__image}
            src={asset('images/hero-robot.webp')}
            alt="Роботизированный бар CUBIC в торговом центре"
            width="775"
            height="810"
          />
        </picture>
      </div>

      <div className={styles.lead__content}>
        <div className={styles.lead__text}>
          <h1 id="lead-title" className={styles.lead__title}>
            {lead.title}
          </h1>
          <p className={styles.lead__subtitle}>
            {lead.subtitle[0]}
            <br />
            {lead.subtitle[1]}
          </p>
        </div>
        <Button href="#request">{lead.button}</Button>
      </div>
    </section>
  );
}
