import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public readonly crossicon = faTimes;
  public readonly hearticon = faHeart;
  public readonly flagiocn = faFontAwesomeFlag;
  public continuebutton = 'Continue';

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

quizlist = [{
    image : "assets/images/ques-1.png ",
    objectives:["sad", "happy", "anger"],
  },
]

  constructor() { }

  ngOnInit(): void {
  } 

}
