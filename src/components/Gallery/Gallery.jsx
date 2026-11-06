import { useState } from 'react';
import { asset } from '../../utils/asset';
import { cx } from '../../utils/cx';
import styles from './Gallery.module.css';

// Галерея карточки товара: миниатюры со стрелками слева, большое фото, точки-индикаторы
export default function Gallery({ images, name }) {
  const [current, setCurrent] = useState(0);
  const count = images.length;
  const show = (index) => setCurrent((index + count) % count);

  return (
    <div className={styles.gallery} aria-roledescription="галерея" aria-label={`Фото ${name}`}>
      <div className={styles.gallery__thumbs}>
        <button
          type="button"
          className={cx(styles.gallery__arrow, styles.gallery__arrow_dir_up)}
          aria-label="Предыдущее фото"
          onClick={() => show(current - 1)}
        />
        <ul className={styles['gallery__thumb-list']}>
          {images.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                className={cx(styles.gallery__thumb, index === current && styles.gallery__thumb_active)}
                aria-label={`Фото ${index + 1} из ${count}`}
                aria-current={index === current}
                onClick={() => show(index)}
              >
                <img src={asset(`images/${image.src}`)} alt="" width="300" height="300" />
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={cx(styles.gallery__arrow, styles.gallery__arrow_dir_down)}
          aria-label="Следующее фото"
          onClick={() => show(current + 1)}
        />
      </div>

      <div className={styles.gallery__main}>
        <img
          className={styles.gallery__image}
          src={asset(`images/${images[current].src}`)}
          alt={images[current].alt}
          width="300"
          height="300"
        />
        <div className={styles.gallery__dots}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={cx(styles.gallery__dot, index === current && styles.gallery__dot_active)}
              aria-label={`Показать фото ${index + 1}`}
              aria-current={index === current}
              onClick={() => show(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
