import { Injectable } from '@angular/core';
import { Question } from './models/question.model';
import { questions } from './questions/questions';
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions: Question[];
  constructor() {
    this.questions = questions;
  }

  getQuestions(): Question[] {
    return this.questions.map(({ answers, prompt, category, subCategory }) => ({ answers, prompt, category, subCategory }));
  }
}
