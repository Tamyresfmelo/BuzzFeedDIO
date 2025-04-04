import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {

  title:string = ""

  questions: any
  questionsSelected: any

  answers: string[] = []
  answersSelected: string =""

  questionIndex: number = 0
  questionMaxIndex: number = 0

  finished: boolean = false

  constructor() {}

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionsSelected = this.questions[this.questionIndex]

      this.questionMaxIndex = this.questions.length
  }

}

playerChoose(value: string){
  this.answers.push(value)
  console.log(this.answers)
  console.log("teste")
  //this.questionIndex++
  //this.questionsSelected = this.questions[this.questionIndex]
  //this.answersSelected = ""
  //if(this.questionIndex == this.questionMaxIndex){
  //  this.finished = true
  //}
}


}
