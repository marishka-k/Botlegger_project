import { asset } from '../../utils/asset';

// SVG-иконка из public/images/icons. Декоративная: подпись даёт кнопка или ссылка-родитель
export default function Icon({ name, width, height, className, alt = '' }) {
  return (
    <img
      className={className}
      src={asset(`images/icons/${name}.svg`)}
      alt={alt}
      width={width}
      height={height}
      aria-hidden={alt ? undefined : true}
    />
  );
}
