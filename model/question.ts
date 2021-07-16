import { shuffle } from "../functions/array";
import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #utterance: string;
  #answers: AnswerModel[];
  #right: boolean;
  // #answered: boolean;

  constructor(
    id: number,
    utterance: string,
    answers: AnswerModel[],
    right = false
  ) {
    this.#id = id;
    this.#utterance = utterance;
    this.#answers = answers;
    this.#right = right;
  }

  get id() {
    return this.#id;
  }

  get utterance() {
    return this.#utterance;
  }

  get answers() {
    return this.#answers;
  }

  get right() {
    return this.#right;
  }

  get notAnswered() {
    return !this.answered;
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) {
        return true;
      }
    }
    return false;
  }

  answerWith(index: number): QuestionModel {
    const right = this.#answers[index]?.right;
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i;
      const shouldReveal = selectedAnswer || answer.right;

      return shouldReveal ? answer.reveal() : answer;
    });

    return new QuestionModel(this.#id, this.#utterance, answers, right);
  }

  shuffleAnswers(): QuestionModel {
    let scrambledAnswers = shuffle(this.#answers);

    return new QuestionModel(
      this.#id,
      this.#utterance,
      scrambledAnswers,
      this.#right
    );
  }

  static fromObject(obj: QuestionModel): QuestionModel {
    const answers = obj.answers.map((answ) => AnswerModel.fromObject(answ));
    return new QuestionModel(obj.id, obj.utterance, answers, obj.right);
  }

  toObject() {
    return {
      id: this.#id,
      utterance: this.#utterance,
      answered: this.answered,
      right: this.#right,
      answers: this.#answers.map((answer) => answer.toObject()),
    };
  }
}
