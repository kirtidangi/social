import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { AwardComponent } from './award/award.component';

const routes: Routes = [ 
  { path: '', component: QuizComponent },
  { path: 'award', component: AwardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
