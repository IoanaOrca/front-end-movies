import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  movie: Object = {};

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

//service to put in the page to contain the movie form --> normall the pages talk with the services
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.movieService.create(this.movie)
        .then((result) => {
         this.router.navigate(['/']);
        })
        .catch((err) => {
          this.error = err.error.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
