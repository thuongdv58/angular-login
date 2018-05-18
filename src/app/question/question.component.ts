import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from './question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
	questionData: Question[];
	errorMessage = '';
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
      this.questionService.getQuestions()
          .subscribe(questions => {
              this.questionData = questions;
              console.log('question', this.questionData);
          });
  }
}
