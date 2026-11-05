import { cubic } from '../../data/content';
import { asset } from '../../utils/asset';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Cubic.module.css';

// Модуль CUBIC + список преимуществ (30:50)
export default function Cubic() {
  return (
    <section id="cubic" className={styles.cubic} aria-labelledby="cubic-title">
      <SectionTitle id="cubic-title">{cubic.title}</SectionTitle>
      <div className={styles.cubic__body}>
        <div className={styles.cubic__photo}>
          <img className={styles.cubic__image} src={asset('images/cubic-module.webp')} alt={cubic.imageAlt} />
        </div>
        <ul className={styles.cubic__list}>
          {cubic.advantages.map((item) => (
            <li key={item} className={styles.cubic__item}>
              <img className={styles.cubic__check} src={asset('images/icons/check.svg')} alt="" width="20" height="15" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
