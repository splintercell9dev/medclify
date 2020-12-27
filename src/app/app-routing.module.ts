import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifyComponent } from '@feature/classify/classify.component';
import { NotFoundComponent } from '@feature/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'classify',
  },
  {
    path: 'classify', component: ClassifyComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
