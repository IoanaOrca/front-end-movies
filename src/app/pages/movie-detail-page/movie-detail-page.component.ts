import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

  movie:Object;

  constructor(private movieService: MovieService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id=params.id;
      this.movieService.getOne(id)
      .then((data) => {
        setTimeout(()=>{
          this.movie = data;
        },1500);
      });
    });
    

  }

}
