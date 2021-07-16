import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import QuestionModel from '../model/question'
import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const router = useRouter();

  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  const loadQuestionIds = async () => {
    const response = await fetch(`${BASE_URL}/quiz`);
    const questionIdsFromApi = await response.json();
    setQuestionIds(questionIdsFromApi);
  }

  const loadQuestion = async (questionId: number) => {
    const response = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await response.json();
    setQuestion(QuestionModel.fromObject(json));
  }

  const answeredQuestion = (answeredQuestion: QuestionModel) => {
    setQuestion(answeredQuestion);
    const right = answeredQuestion.right;
    setRightAnswers(rightAnswers + (right ? 1 : 0));
  }

  const nextQuestionId = () => {
    const nextIndex = questionIds.indexOf(question.id) + 1;
    return questionIds[nextIndex];
  }

  const goToNextQuestion = (nextId: number) => {
    loadQuestion(nextId);
  }

  const finish = () => {
    router.push({
      pathname: '/result',
      query: {
        total: questionIds.length,
        right: rightAnswers
      }
    })
  }

  const goToNextStep = () => {
    const nextId = nextQuestionId();
    nextId ? goToNextQuestion(nextId) : finish();
  }

  useEffect(() => {
    loadQuestionIds();
  }, []);

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0]);
  }, [questionIds]);

  return question ? (
    <Quiz
      question={question}
      last={nextQuestionId() === undefined}
      answeredQuestion={answeredQuestion}
      goToNextStep={goToNextStep}
    />
  ) : false
}
