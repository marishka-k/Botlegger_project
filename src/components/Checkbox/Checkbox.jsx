import { forwardRef } from 'react';
import { cx } from '../../utils/cx';
import { asset } from '../../utils/asset';
import styles from './Checkbox.module.css';

// Чекбокс из UI Kit: нативный input скрыт, вид — SVG «condition=active / not active»
const Checkbox = forwardRef(function Checkbox({ name, label, checked, error, onChange }, ref) {
  return (
    <label className={cx(styles.checkbox, error && styles.checkbox_invalid)}>
      <input
        ref={ref}
        className={cx('visually-hidden', styles.checkbox__input)}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        aria-invalid={Boolean(error)}
      />
      <img
        className={styles.checkbox__box}
        src={asset(`images/icons/${checked ? 'checkbox-checked' : 'checkbox'}.svg`)}
        alt=""
        width="20"
        height="20"
        aria-hidden="true"
      />
      <span className={styles.checkbox__label}>{label}</span>
    </label>
  );
});

export default Checkbox;
