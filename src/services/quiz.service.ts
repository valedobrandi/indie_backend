import { http } from "../https";
import { IQuestion } from "../Interfaces/questions/IQuestions";
import { ServiceResponse } from "../Interfaces/ServiceResponse";

export default class QuizService {
  public async quizQuestions(
  ): Promise<ServiceResponse<IQuestion[]>> {
    const response = await fetch(http.quizapi);

    const data = await response.json();
    
    const filterMultipleChoice = data.filter((question: IQuestion) => {
      return question.multiple_correct_answers === "false"
    })
    
    const questions = filterMultipleChoice.map((question: IQuestion) => {
      const [getCorrectAnswers] = Object.entries(question.correct_answers).find(
        ([_key, value]) => value === "true") || ["", ""];
        
      const getIndexCorrectAnswer = Object.keys(
        question.correct_answers
      ).indexOf(getCorrectAnswers);
      
      return {
        ...question,
        correct_answers: getIndexCorrectAnswer,
      };
    });
    
    const filteredQuestions = questions.filter(
      ({ correct_answers }: { correct_answers: number }) =>
        correct_answers !== -1
    );
    return { status: "SUCCESSFUL", data: filteredQuestions };
  }
}
