import styles from '../styles/Quiz.module.css';
import QuestionModel from "../model/question";
import Question from './Question';
import Button from './Button';

interface QuizProps {
  question: QuestionModel;
  last: boolean;
  answeredQuestion: (question: QuestionModel) => void;
  goToNextStep: () => void;
}

const Quiz: React.FC<QuizProps> = (props) => {

  const onResponse = (index: number) => {
    if (props.question.notAnswered) {
      props.answeredQuestion(props.question.answerWith(index));
    }
  }

  return (
    <div className={styles.quiz}>
      {
        props.question && (
          <Question
            value={props.question}
            timeForAnswer={6}
            onResponse={onResponse}
            onTimeEnd={props.goToNextStep}
          />
        )
      }

      <Button text={props.last ? 'Finalizar' : 'Próxima'} onClick={props.goToNextStep} />
    </div>
  )
}

export default Quiz;
