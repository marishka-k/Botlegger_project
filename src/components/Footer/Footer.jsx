import { contacts, disclaimer, socials } from '../../data/contacts';
import { asset } from '../../utils/asset';
import Icon from '../Icon/Icon';
import styles from './Footer.module.css';

// Подвал (66:28): логотип, контакты (условные), соцсети (заглушки)
export default function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.footer__inner}>
        <a className={styles.footer__logo} href="#top" aria-label="Botlegger — наверх">
          <img src={asset('images/logo.png')} alt="" width="80" height="80" />
        </a>

        <address className={styles.footer__contacts}>
          <p className={styles.footer__title}>{contacts.title}</p>
          <a href={`tel:${contacts.phone.replace(/[^\d+]/g, '')}`}>{contacts.phone}</a>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          <span>{contacts.handle}</span>
          <span>{contacts.address}</span>
        </address>

        <ul className={styles.footer__socials}>
          {socials.map((social) => (
            <li key={social.id}>
              <a className={styles.footer__social} href={social.href} aria-label={social.label}>
                <Icon name={social.icon} width={30} height={30} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.footer__disclaimer}>{disclaimer}</p>
    </footer>
  );
}
