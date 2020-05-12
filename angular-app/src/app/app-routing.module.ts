import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home/home.component';
import { DotationsComponent } from './dotations/dotations/dotations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dotations', component: DotationsComponent },
  { path: '**',   redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
