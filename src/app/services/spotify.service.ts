//Servicios
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Spotify services listo')
  }

  /*token:string=''



getToken(){
  const headers=new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
  return this.http.post<any>
  ('https://accounts.spotify.com/api/token',
  `grant_type=client_credentials&client_id=46c159ae3ef94fe8b11641d60e642df9&client_secret=9c52df69e0a448e695f9b72d75aa27eb`,
   { headers }).pipe(map(data=> this.token = data.access_token))
}
*/

  getQuery(query:string){
    const url= `https://api.spotify.com/v1/${query}`;

    const headers=new HttpHeaders({
      'Authorization': 'Bearer BQCzoM195KdGAPoGQvDzKVqy9_NhIorJTjrI_8E5go-Cs1t8jmiv2UkWAKUpJh3aC6BE5m7zpOe3SHSR1hleazWS96-7RfaZzVn3HBxwxUaCxMbn1SI'
      });

      return this.http.get(url,{headers});
  }











//Lo nuevo
  getNewReleases(){

      
    return this.getQuery('browse/new-releases')
            .pipe(map((data:any) => data['albums'].items) );
    
                
  }

  //buscador
  getArtistas(termino:string){
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe(map((data:any) => data['artists'].items));
  }

  //obtener el artista
  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
           // .pipe(map((data:any) => data['artists'].items));
}

//obtener las mejores canciones del artista
getTopTracks(id:string){
  return this.getQuery(`artists/${id}/top-tracks?market=ES`)
          .pipe(map((data:any) => data['tracks']));
}

}
