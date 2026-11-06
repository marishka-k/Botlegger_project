import { cubic } from '../../data/content';
import { asset } from '../../utils/asset';
import CheckList from '../CheckList/CheckList';
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
        <CheckList className={styles.cubic__list} items={cubic.advantages} />
      </div>
    </section>
  );
}
