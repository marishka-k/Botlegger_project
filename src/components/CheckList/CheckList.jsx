import { cx } from '../../utils/cx';
import Icon from '../Icon/Icon';
import styles from './CheckList.module.css';

// Список с галочками: преимущества CUBIC и описание в карточке товара
export default function CheckList({ items, className }) {
  return (
    <ul className={cx(styles['check-list'], className)}>
      {items.map((item) => (
        <li key={item} className={styles['check-list__item']}>
          <Icon name="check" className={styles['check-list__icon']} width={20} height={15} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
