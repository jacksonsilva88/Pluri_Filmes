import { Component, OnInit } from '@angular/core';

import { NowPlayingService } from './../now-playing.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  filmes: Array<any>;
  // filmes = [
  //   {id: 1, nome: 'Jackson Silva', email:'jackson@email.com'},
  //   {id: 2, nome: 'Natalia Guedes', email:'Natalia@email.com'}
  // ];

  constructor(private movieService: NowPlayingService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.movieService.listar().subscribe(dados => this.filmes = dados);
  }

}
