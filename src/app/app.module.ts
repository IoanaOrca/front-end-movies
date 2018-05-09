import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MovieCreatePageComponent } from './pages/movie-create-page/movie-create-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { MovieService } from './services/movie.service';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieEditPageComponent } from './components/movie-edit-page/movie-edit-page.component';
import { AuthService } from './services/auth.service';


// -- guards
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';


const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [InitAuthGuardService] },
  { path: 'movies/create',component: MovieCreatePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'movies/:id',component: MovieDetailPageComponent,canActivate: [InitAuthGuardService] },
  { path: 'movies/:id/edit', component: MovieEditPageComponent,canActivate: [InitAuthGuardService] },
  { path: 'login', component: LoginPageComponent, canActivate: [InitAuthGuardService]}

];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieCardComponent,
    MovieDetailPageComponent,
    MovieCreatePageComponent,
    MovieFormComponent,
    MovieEditPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MovieService,
    AuthService,
    RequireUserGuardService,
    RequireAnonGuardService,
    InitAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
