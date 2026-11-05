import Cubic from './components/Cubic/Cubic';
import Header from './components/Header/Header';
import Lead from './components/Lead/Lead';
import Pluses from './components/Pluses/Pluses';
import Solutions from './components/Solutions/Solutions';
import styles from './App.module.css';

// Порядок разделов — как в колонке макета 52:247.
// Ещё не сверстаны (лимит Figma MCP): «О нас» (87:26), «Реализованные проекты» (92:45),
// форма (66:25), подвал (66:28), модалка товара (37:137).
export default function App() {
  return (
    <div id="top" className={styles.page}>
      <Header />
      <main className={styles.page__main}>
        <Lead />
        <Cubic />
        <Pluses />
        <Solutions />
      </main>
    </div>
  );
}
