import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { VoterComponent } from './1-voter/voter.component';

import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    NavComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterComponent } from './1-voter/voter.component';
import { TodosComponent } from './2-todos/todos.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TodosComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/