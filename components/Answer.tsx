import AnswerModel from "../model/answer";
import styles from '../styles/Answer.module.css';

interface AnswerProps {
  value: AnswerModel;
  index: number;
  char: string;
  charBackgroundColor: string;
  onResponse: (index: number) => void;
}

const Answer: React.FC<AnswerProps> = (props) => {
  const answer = props.value;
  const revealedAnswer = answer.revealed ? styles.revealedAnswer : '';

  return (
    <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
      <div className={`${revealedAnswer} ${styles.answerContent}`}>
        <div className={styles.front}>
          <div className={styles.char} style={{ backgroundColor: props.charBackgroundColor }}>
            {props.char}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.back}>
          {
            answer.right ?
              (
                <div className={styles.right}>
                  <div>A resposta certa é...</div>
                  <div className={styles.value}>{answer.value}</div>
                </div>
              )
              :
              (
                <div className={styles.wrong}>
                  <div>A resposta informada está errada...</div>
                  <div className={styles.value}>{answer.value}</div>
                </div>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default Answer;