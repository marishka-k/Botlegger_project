# Botlegger — концепт редизайна

Одностраничный сайт роботизированного бара CUBIC по макету Figma «Botlegger».
Учебный проект для портфолио: **не является официальным сайтом Botlegger**.
Контакты условные, форма заявки работает в демо-режиме и никуда ничего не отправляет.

**Сайт:** https://marishka-k.github.io/Botlegger_project/

## Стек

- Vite 5 + React 18, без UI-библиотек и TypeScript
- CSS Modules + БЭМ-нейминг внутри модулей; глобально только `src/styles/global.css` (сброс, шрифт, токены)
- Шрифт Roboto (Google Fonts)
- Деплой на GitHub Pages через `gh-pages`

## Запуск

```bash
npm install
npm run dev       # локальный сервер
npm run build     # сборка в dist/
npm run deploy    # сборка и публикация на GitHub Pages
```

Vite 5 требует Node 18+.

## Адаптив

| Версия   | Ширина экрана | Макет  | Что меняется                                                     |
| -------- | ------------- | ------ | ---------------------------------------------------------------- |
| Мобильная | до 1023 px   | 375 px | бургер-меню, фото первого экрана фоном, карточки листаются вбок |
| Лаптоп   | 1024–1439 px  | 1024 px | меню в шапке, сетки по 3 колонки                                |
| Десктоп  | от 1440 px    | 1440 px | значения из макета; шире 1440 контент по центру                 |

Размеры задаются CSS-переменными в `global.css` и переопределяются медиазапросами.

## Структура

```
public/images/        картинки и SVG-иконки (icons/, gallery/, partners/, projects/)
src/
  App.jsx             порядок разделов, состояние модалки товара
  data/               тексты и списки: навигация, плюсы, решения, «О нас», проекты, форма, контакты
  components/         каждый блок — папка с <Имя>.jsx и <Имя>.module.css
    Header, Lead, Cubic, Pluses, Solutions, About, Projects, RequestForm, Footer   — разделы
    Button, SectionTitle, Icon, CheckList, PlusCard, SolutionCard,
    Modal, ProductCard, Gallery, FormField, Checkbox                               — переиспользуемые
  hooks/useScrollLock.js   блокировка прокрутки и закрытие по Escape
  utils/                   cx (склейка классов), asset (путь с учётом base), validate (проверка формы)
  styles/global.css        сброс, шрифт, токены трёх версий
```
