import { forwardRef } from 'react';
import { cx } from '../../utils/cx';
import styles from './FormField.module.css';

// Поле формы: placeholder вместо видимой подписи (как в макете), подпись — для скринридеров
const FormField = forwardRef(function FormField({ name, placeholder, error, ...rest }, ref) {
  const errorId = `${name}-error`;

  return (
    <div className={styles.field}>
      <label className="visually-hidden" htmlFor={name}>
        {placeholder}
      </label>
      <input
        ref={ref}
        id={name}
        name={name}
        placeholder={placeholder}
        className={cx(styles.field__input, error && styles.field__input_invalid)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} className={styles.field__error}>
          {error}
        </p>
      )}
    </div>
  );
});

export default FormField;
