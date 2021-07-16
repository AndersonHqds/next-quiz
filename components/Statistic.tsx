import styles from '../styles/Statistic.module.css';

interface StatisticProps {
  value: any;
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

const Statistic: React.FC<StatisticProps> = (props) => {
  return (
    <div className={styles.statistic}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.backgroundColor ?? '#FDD60F',
          color: props.textColor ?? '#333'
        }}>
        {props.value}
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}

export default Statistic;
