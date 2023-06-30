import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { TaskComponent } from './components/task/task.component';
import { SubTaskComponent } from './components/sub-task/sub-task.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { MappingsComponent } from './pages/mappings/mappings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent,
    NavigationComponent,
    TaskComponent,
    SubTaskComponent,
    PreloaderComponent,
    MappingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgSelectModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
