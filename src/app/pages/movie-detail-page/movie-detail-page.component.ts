import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

  movie:Object;
  idMovie: string;

  constructor(private movieService: MovieService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.idMovie = params.id;
      this.movieService.getOne(this.idMovie)
      .then((data) => {
        setTimeout(()=>{
          this.movie = data;
        },1500);
      });
    });
  }

  handleDeleteClick(){
    this.movieService.deleteOne(this.idMovie)
    .then(()=>{
      this.router.navigate(['/']);
    })
    .catch(err => {
      console.log(err);
    })
  }
}
