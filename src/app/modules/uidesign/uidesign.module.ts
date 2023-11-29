import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiModuleModule } from '../ui-module/ui-module.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { UidesignRoutingModule } from './uidesign-routing.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    UidesignRoutingModule,
    UiModuleModule,
    FontAwesomeModule,
    MatProgressBarModule
  ]
}) 
export class UidesignModule { }
