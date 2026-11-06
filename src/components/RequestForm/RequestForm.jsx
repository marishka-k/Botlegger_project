import { useRef, useState } from 'react';
import { formAgreements, formFields, formText } from '../../data/form';
import { validateRequest } from '../../utils/validate';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import FormField from '../FormField/FormField';
import styles from './RequestForm.module.css';

const initialValues = { name: '', email: '', phone: '', consent: false, policy: false };

// Форма «Оставить заявку» (66:25). Отправка — только демо: данные никуда не уходят
export default function RequestForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSent, setSent] = useState(false);
  const fieldRefs = useRef({});
  const resultRef = useRef(null);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const next = { ...values, [name]: type === 'checkbox' ? checked : value };
    setValues(next);
    // После первой попытки отправки ошибки обновляются на лету
    if (errors[name]) setErrors(validateRequest(next));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateRequest(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    setSent(true);
    requestAnimationFrame(() => resultRef.current?.focus());
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
    setSent(false);
  };

  const setFieldRef = (name) => (node) => {
    fieldRefs.current[name] = node;
  };

  return (
    <section id="request" className={styles.request} aria-labelledby="request-title">
      <h2 id="request-title" className={styles.request__title}>
        {formText.title}
      </h2>

      {isSent ? (
        <div className={styles.request__result} ref={resultRef} tabIndex={-1} role="status">
          <p className={styles['request__result-title']}>{formText.demoTitle}</p>
          <p>{formText.demoText}</p>
          <Button size="small" onClick={handleReset}>
            {formText.again}
          </Button>
        </div>
      ) : (
        <form className={styles.request__form} noValidate onSubmit={handleSubmit}>
          <div className={styles.request__fields}>
            {formFields.map((field) => (
              <FormField
                key={field.name}
                ref={setFieldRef(field.name)}
                {...field}
                value={values[field.name]}
                error={errors[field.name]}
                onChange={handleChange}
              />
            ))}
          </div>

          <fieldset className={styles.request__agreements}>
            <legend className="visually-hidden">Согласия</legend>
            {formAgreements.map((item) => (
              <Checkbox
                key={item.name}
                ref={setFieldRef(item.name)}
                name={item.name}
                label={item.label}
                checked={values[item.name]}
                error={errors[item.name]}
                onChange={handleChange}
              />
            ))}
          </fieldset>

          <Button size="small" type="submit" className={styles.request__submit}>
            {formText.submit}
          </Button>
        </form>
      )}
    </section>
  );
}
