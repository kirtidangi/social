import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AdminRoutingModule } from './admin-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiModuleModule } from '../ui-module/ui-module.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AwardComponent } from './award/award.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { RightsectionComponent } from './rightsection/rightsection.component';
import { AwardinfoComponent } from './awardinfo/awardinfo.component';
import { ScoresidebarComponent } from './scoresidebar/scoresidebar.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    QuizComponent,
    AwardComponent,
    SidebarmenuComponent,
    RightsectionComponent,
    AwardinfoComponent,
    ScoresidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    UiModuleModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatTableModule
  ]
})
export class AdminModule { }
