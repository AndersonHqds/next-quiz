import styles from '../styles/Utterance.module.css';

interface UtteranceProps {
  text: string;
}

const Utterance: React.FC<UtteranceProps> = (props) => {
  return (
    <div className={styles.enunciado}>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}

export default Utterance;