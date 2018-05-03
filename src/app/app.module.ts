import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieService } from './services/movie.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

const routes: Routes = [
  // { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '',  component: HomePageComponent }
  // { path: 'movies/:id', component: MovieDetailPageComponent },
  // { path: 'movies/:create', component: MovieCreatePageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
