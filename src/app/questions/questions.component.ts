import { QuestionService } from './../question.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  questions: Question[] = [];
  currentQuestion: Question;
  currentQuestionIndex = 0;
  doRandomizeQuestions = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'ArrowRight') {
      this.onNextQuestion();
    } else if (event.key == 'ArrowLeft') {
      this.onPreviousQuestion();
    }
  }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }
  onNextQuestion() {
      if (this.doRandomizeQuestions) {
        this.onNextRandomQuestion();
      } else if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
      }
  }

  onNextRandomQuestion() {
    let nextQuestionIndex = Math.floor(Math.random() * this.questions.length);
    console.log(nextQuestionIndex);
    this.currentQuestionIndex = nextQuestionIndex;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }
  onToggleRandom() {
    this.doRandomizeQuestions = !this.doRandomizeQuestions;
  }

  onPreviousQuestion() {
    if(this.doRandomizeQuestions){
      this.onNextRandomQuestion();
    }
    else if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
  }
}
