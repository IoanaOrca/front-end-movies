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

import { MovieService } from './services/movie.service';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieEditPageComponent } from './components/movie-edit-page/movie-edit-page.component';

const routes: Routes = [
  { path: '',  component: HomePageComponent },
  { path: 'movies/create',component: MovieCreatePageComponent},
  { path: 'movies/:id',component: MovieDetailPageComponent},
  { path: 'movies/:id/edit', component: MovieEditPageComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieCardComponent,
    MovieDetailPageComponent,
    MovieCreatePageComponent,
    MovieFormComponent,
    MovieEditPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
