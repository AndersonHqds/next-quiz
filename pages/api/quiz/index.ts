import { shuffle } from "../../../functions/array";
import questions from "../questiondb";

export default (req, res) => {
  const ids = questions.map((question) => question.id);
  return res.status(200).json(shuffle(ids));
};
