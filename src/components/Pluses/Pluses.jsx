import { pluses } from '../../data/pluses';
import PlusCard from '../PlusCard/PlusCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Pluses.module.css';

// «Наши плюсы» — сетка из 9 карточек (39:309)
export default function Pluses() {
  return (
    <section id="pluses" className={styles.pluses} aria-labelledby="pluses-title">
      <SectionTitle id="pluses-title">Наши плюсы</SectionTitle>
      <ul className={styles.pluses__grid}>
        {pluses.map((plus) => (
          <PlusCard key={plus.id} {...plus} />
        ))}
      </ul>
    </section>
  );
}
