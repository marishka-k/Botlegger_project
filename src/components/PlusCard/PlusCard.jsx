import { asset } from '../../utils/asset';
import styles from './PlusCard.module.css';

// Карточка плюса: иконка 100×100, название, описание (348:292)
export default function PlusCard({ icon, name, text }) {
  return (
    <li className={styles['plus-card']}>
      <img className={styles['plus-card__icon']} src={asset(`images/icons/${icon}`)} alt="" width="100" height="100" />
      <div className={styles['plus-card__text']}>
        <h3 className={styles['plus-card__name']}>{name}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
}
