import { useCallback, useState } from 'react';
import { navLinks, contactsLink } from '../../data/navigation';
import { useEscape, useScrollLock } from '../../hooks/useScrollLock';
import { asset } from '../../utils/asset';
import { cx } from '../../utils/cx';
import Icon from '../Icon/Icon';
import styles from './Header.module.css';

// Шапка (30:15 / 366:332 / 368:963). До 1023 px меню — в бургере (370:1319).
export default function Header({ activeId = 'about' }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useScrollLock(isMenuOpen);
  useEscape(isMenuOpen, closeMenu);

  return (
    <header className={cx(styles.header, isMenuOpen && styles.header_menu_open)}>
      <div className={styles.header__inner}>
        <a className={styles.header__logo} href="#top" aria-label="Botlegger — наверх" onClick={closeMenu}>
          <img src={asset('images/logo.png')} alt="" width="80" height="80" />
        </a>

        <nav
          id="main-menu"
          className={cx(styles.header__nav, isMenuOpen && styles.header__nav_open)}
          aria-label="Основное меню"
        >
          <ul className={styles.header__list}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={cx(styles.header__link, link.id === activeId && styles.header__link_active)}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className={cx(styles.header__link, styles.header__link_contacts)} href={contactsLink.href} onClick={closeMenu}>
            {contactsLink.label}
          </a>
        </nav>

        <button
          type="button"
          className={styles.header__burger}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <Icon name="close-mobile" width={15} height={15} /> : <Icon name="burger" width={25} height={17} />}
        </button>
      </div>
    </header>
  );
}
