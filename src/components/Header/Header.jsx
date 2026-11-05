import { useCallback, useState } from 'react';
import { navLinks, contactsLink } from '../../data/navigation';
import { useEscape, useScrollLock } from '../../hooks/useScrollLock';
import { asset } from '../../utils/asset';
import { cx } from '../../utils/cx';
import styles from './Header.module.css';

// Шапка (30:15). До 1023 px меню прячется в бургер.
// Оформление бургер-меню предварительное: фрейм 370:1319 ещё не сверен.
export default function Header({ activeId = 'about' }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useScrollLock(isMenuOpen);
  useEscape(isMenuOpen, closeMenu);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <a className={styles.header__logo} href="#top" aria-label="Botlegger — на главную">
          <img src={asset('images/logo.png')} alt="" width="80" height="80" />
        </a>

        <button
          type="button"
          className={styles.header__burger}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={cx(styles['header__burger-line'], isMenuOpen && styles['header__burger-line_open'])} />
        </button>

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
                  aria-current={link.id === activeId ? 'page' : undefined}
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
      </div>
    </header>
  );
}
