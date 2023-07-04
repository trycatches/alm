import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MappingsComponent } from './pages/mappings/mappings.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';

const routes: Routes = [
  // { path: '', component: SigninComponent, canActivate: [AuthGuard] },
  { 
    path: 'dashboard', 
    component: SigninComponent, 
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role:['admin','it','business']
    }
  },
  { path: 'mappings', component: MappingsComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
