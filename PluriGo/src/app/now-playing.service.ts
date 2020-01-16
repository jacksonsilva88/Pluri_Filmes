import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {
  filmesURL:any;
 
  constructor(private http: HttpClient) {
    this.filmesURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=37cd551d86fb77d5d2b7384b4cd9f0c3&language=en-US&page=1';
    console.log(this.filmesURL);
    console.log(this.listar());
   }

  listar(){
    return this.http.get<any[]>(this.filmesURL);
  };
}
