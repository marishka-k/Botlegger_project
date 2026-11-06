import Button from '../Button/Button';
import CheckList from '../CheckList/CheckList';
import Gallery from '../Gallery/Gallery';
import styles from './ProductCard.module.css';

// Карточка товара в модалке (37:137 / 366:336 / 368:774)
export default function ProductCard({ product, onRequest }) {
  const titleId = `product-${product.id}-title`;

  return (
    <article className={styles.product} aria-labelledby={titleId}>
      <div className={styles.product__top}>
        <Gallery images={product.gallery} name={product.name} />

        <div className={styles.product__info}>
          <h2 id={titleId} className={styles.product__title}>
            {product.name}
          </h2>
          <h3 className={styles.product__subtitle}>Описание:</h3>
          <div className={styles.product__scroll} tabIndex={0} aria-label="Описание, прокручивается">
            <CheckList className={styles.product__list} items={product.description} />
          </div>
        </div>
      </div>

      <div className={styles.product__specs}>
        <h3 className={styles.product__subtitle}>Характеристики:</h3>
        <dl className={styles.product__table}>
          {product.specs.map((spec) => (
            <div key={spec.label} className={styles.product__row}>
              <dt className={styles.product__term}>{spec.label}:</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Button className={styles.product__button} onClick={onRequest}>
        Оставить заявку
      </Button>
    </article>
  );
}
