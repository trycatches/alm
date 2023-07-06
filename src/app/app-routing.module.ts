import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GlComponent } from './pages/gl/gl.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';

const routes: Routes = [
  // { 
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  //   // canActivate: [AuthGuard]
  // },
  // { 
  //   path: 'dashboard', 
  //   component: DashboardComponent, 
  //   // canActivate: [AuthGuard, RoleGuard],
  //   // data: {
  //   //   role:['admin','it','business']
  //   // }
  //   children:[
  //     {
  //       path: 'data-leads', 
  //       component: DashboardComponent, 
  //     },
  //     {
  //       path: 'summ-runs', 
  //       component: DashboardComponent, 
  //     },
  //     {
  //       path: 'gl-bucketing', 
  //       component: DashboardComponent, 
  //     },
  //     {
  //       path: 'gl-mapping', 
  //       component: MappingsComponent, 
  //     },
  //   ]
  // },
  // { 
  //   path: 'dashboard/:id', 
  //   component: DashboardComponent, 
  // },
  { path: 'dashboard/data-leads', component: DashboardComponent },
  { path: 'dashboard/summ-runs', component: DashboardComponent },
  { path: 'gl/bucketing', component: GlComponent },
  { path: 'gl/mapping', component: GlComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
