// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questions from "../questiondb";

export default (req, res) => {
  const selectedId = +req.query.id;

  const uniqueQuestionOrNothing = questions.filter(
    (question) => question.id === selectedId
  );

  if (uniqueQuestionOrNothing.length === 1) {
    const selectedQuestion = uniqueQuestionOrNothing[0].shuffleAnswers();
    res.status(200).json(selectedQuestion.toObject());
  } else {
    res.status(204).send();
  }
};
