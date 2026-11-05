import { cx } from '../../utils/cx';
import styles from './SectionTitle.module.css';

// Заголовок раздела (UI Kit: subtitle), по центру
export default function SectionTitle({ children, id, className }) {
  return (
    <h2 id={id} className={cx(styles['section-title'], className)}>
      {children}
    </h2>
  );
}
