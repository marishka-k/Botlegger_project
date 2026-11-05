import { cx } from '../../utils/cx';
import styles from './Button.module.css';

// Жёлтая кнопка из UI Kit: size="large" — «Оставить заявку», size="small" — «Подробнее»
export default function Button({ children, size = 'large', href, className, ...rest }) {
  const classes = cx(styles.button, styles[`button_size_${size}`], className);

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
