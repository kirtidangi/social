import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/uidesign/uidesign.module')
      .then(mod => mod.UidesignModule) 
  },  
  {
    path: 'quiz',
    loadChildren: () => import('./modules/admin/admin.module')
      .then(mod => mod.AdminModule) 
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
