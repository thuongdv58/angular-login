import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionData: any;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionData = this.questionService.getQuestions();
    console.log(this.questionData);
  }

}
