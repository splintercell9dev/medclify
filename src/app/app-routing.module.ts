import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home',
  },
  {
    path: 'home', loadChildren: () => import('@feature/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'species/:id', loadChildren: () => import('@feature/species/species.module').then( m => m.SpeciesModule)
  },
  {
    path: '**', loadChildren: () => import('@feature/not-found/not-found.module').then( m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
