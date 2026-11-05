import { lead } from '../../data/content';
import { asset } from '../../utils/asset';
import Button from '../Button/Button';
import styles from './Lead.module.css';

// Первый экран (30:19) + фото робота в ТЦ справа (317:156) с растушёвкой (61:15, 317:158)
export default function Lead() {
  return (
    <section className={styles.lead} aria-labelledby="lead-title">
      <div className={styles.lead__photo}>
        <img
          className={styles.lead__image}
          src={asset('images/hero-robot.webp')}
          alt="Роботизированный бар CUBIC в торговом центре"
          width="775"
          height="810"
        />
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
        <Button href="#contacts">{lead.button}</Button>
      </div>
    </section>
  );
}
