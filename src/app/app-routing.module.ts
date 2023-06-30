import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MappingsComponent } from './pages/mappings/mappings.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mappings', component: MappingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
