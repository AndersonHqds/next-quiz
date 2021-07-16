import styles from '../styles/Result.module.css';
import { useRouter } from 'next/router';
import Statistic from '../components/Statistic';
import Button from '../components/Button';

const Resultado = () => {
  const router = useRouter();

  const total = +router.query.total;
  const right = +router.query.right;
  const percent = Math.round((right / total) * 100);

  return (
    <div className={styles.result}>
      <h1>Resultado</h1>
      <div style={{ display: 'flex' }}>
        <Statistic text='Perguntas' value={total} />
        <Statistic text='Certas' backgroundColor="#9CD2A4" value={right} />
        <Statistic text='Percentual' backgroundColor="#DE6a33" value={`${percent}%`} />
      </div>
      <Button href="/" text="Tentar novamente" />
    </div>
  )
}

export default Resultado;