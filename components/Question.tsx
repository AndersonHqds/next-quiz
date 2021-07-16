import styles from '../styles/Question.module.css';
import QuestionModel from "../model/question";
import Utterance from './Utterance';
import Answer from './Answer';
import Timer from './Timer';

const chars = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },

]

interface QuestionProps {
  value: QuestionModel;
  onResponse: (index: number) => void;
  onTimeEnd: () => void;
  timeForAnswer?: number;
};

const Question: React.FC<QuestionProps> = (props) => {
  const question = props.value;

  const renderAnswers = () => {
    return question.answers.map((answer, i) => (
      <Answer key={`${question.id}.${i}`} onResponse={props.onResponse} value={answer} char={chars[i].value} index={i} charBackgroundColor={chars[i].color} />
    ))
  }

  return (
    <div className={styles.question}>
      <Utterance text={question.utterance} />
      <Timer key={question.id} duration={props.timeForAnswer ?? 10} onTimeEnd={props.onTimeEnd} />
      {renderAnswers()}
    </div>
  )
}

export default Question;