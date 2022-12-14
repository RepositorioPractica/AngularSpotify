import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',

})
export class ArtistaComponent {

  artista:any={};
  topTracks:any[]=[];

  loading: boolean;


  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService) { 
  
                this.loading=true;
  this.router.params.subscribe(params=>{
    this.getArtista(params['id']);
    this.getTopTracks(params['id']);
  });
}

//obtiene informacion del artista
getArtista(id :string){
  this.loading=true;
  this.spotify.getArtista(id)
      .subscribe(artista =>{
        console.log(artista);
        //el igual al artista que resivo en el servicio de spotify
        this.artista=artista;
        this.loading=false;
      })
}



getTopTracks(id :string){
  this.loading=true;
  this.spotify.getTopTracks(id)
      .subscribe(topTracks =>{
        console.log(topTracks);
      
        this.topTracks=topTracks;
      })
}
}
