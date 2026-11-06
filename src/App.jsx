import { useCallback, useState } from 'react';
import About from './components/About/About';
import Cubic from './components/Cubic/Cubic';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Lead from './components/Lead/Lead';
import Modal from './components/Modal/Modal';
import Pluses from './components/Pluses/Pluses';
import ProductCard from './components/ProductCard/ProductCard';
import Projects from './components/Projects/Projects';
import RequestForm from './components/RequestForm/RequestForm';
import Solutions from './components/Solutions/Solutions';
import { solutions } from './data/solutions';
import styles from './App.module.css';

// Порядок разделов — как в колонке макета 52:247
export default function App() {
  const [productId, setProductId] = useState(null);
  const product = solutions.find((item) => item.id === productId);

  const closeProduct = useCallback(() => setProductId(null), []);

  // «Оставить заявку» в карточке: закрыть окно и перейти к форме
  const goToRequest = useCallback(() => {
    setProductId(null);
    setTimeout(() => {
      document.getElementById('request')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('name')?.focus({ preventScroll: true });
    }, 0);
  }, []);

  return (
    <>
      <div id="top" className={styles.page}>
        <Header />
        <main className={styles.page__main}>
          <Lead />
          <Cubic />
          <Pluses />
          <Solutions onMore={setProductId} />
          <About />
          <Projects />
          <RequestForm />
        </main>
      </div>
      <Footer />

      <Modal isOpen={Boolean(product)} onClose={closeProduct} labelledBy={product && `product-${product.id}-title`}>
        {product && <ProductCard product={product} onRequest={goToRequest} />}
      </Modal>
    </>
  );
}
