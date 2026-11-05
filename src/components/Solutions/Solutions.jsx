import { solutions } from '../../data/solutions';
import SectionTitle from '../SectionTitle/SectionTitle';
import SolutionCard from '../SolutionCard/SolutionCard';
import styles from './Solutions.module.css';

// «Наши решения» — три карточки (39:308); «Подробнее» открывает модалку товара
export default function Solutions({ onMore }) {
  return (
    <section id="solutions" className={styles.solutions} aria-labelledby="solutions-title">
      <SectionTitle id="solutions-title">Наши решения</SectionTitle>
      <ul className={styles.solutions__list}>
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} {...solution} onMore={() => onMore?.(solution.id)} />
        ))}
      </ul>
    </section>
  );
}
