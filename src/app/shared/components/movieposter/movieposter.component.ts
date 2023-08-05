import { Component, OnInit } from '@angular/core';
import { Imovies } from 'src/app/models/moviesinterface';
import { movieArray } from '../../constant/moviesData';

@Component({
  selector: 'app-movieposter',
  templateUrl: './movieposter.component.html',
  styleUrls: ['./movieposter.component.scss']
})
export class MovieposterComponent implements OnInit {
 public moviesData !:Array<Imovies>
  constructor() { }

  ngOnInit(): void {
    this.moviesData = movieArray
  }

}
