import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
})
export class FlashCardComponent implements OnInit {
  _question: Question;
  @Input()
  set question(question: Question) {
    this.showPrompt = true;
    this._question = question;
  }

  showPrompt: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onTogglePrompt() {
    this.showPrompt = !this.showPrompt;
  }

}
