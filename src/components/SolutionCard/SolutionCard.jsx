import { asset } from '../../utils/asset';
import Button from '../Button/Button';
import styles from './SolutionCard.module.css';

// Карточка решения: название, фото, кнопка «Подробнее» (35:108)
export default function SolutionCard({ name, image, alt, onMore }) {
  return (
    <li className={styles['solution-card']}>
      <h3 className={styles['solution-card__name']}>{name}</h3>
      <div className={styles['solution-card__photo']}>
        <img className={styles['solution-card__image']} src={asset(`images/${image}`)} alt={alt} />
      </div>
      <Button size="small" onClick={onMore} aria-haspopup="dialog">
        Подробнее
      </Button>
    </li>
  );
}
