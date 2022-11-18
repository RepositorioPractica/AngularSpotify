//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {
  //paises:any []=[];

  nuevasCanciones: any[]=[];
  loading: boolean;
  error: boolean;
  mensajeError! : String;

  constructor(private spotify : SpotifyService) {
    
    this.loading=true;
    this.error=false;

    this.spotify.getNewReleases()
    .subscribe((data:any)=>{
    console.log(data);
    //this.loading=false;
    this.nuevasCanciones=data;
    this.loading=false;

    }, (err)=>{
      this.loading=false;
      this.error=true;
      console.log(err)
      console.log(err.error.error.message)
      this.mensajeError=err.error.error.message;
    });
  }

  /*
  TRABAJAR CON APIS
  constructor(private http :HttpClient) { 

    console.log("listo")
    this.http.get('https://restcountries.com/v3.1/lang/spa')
      .subscribe((respuesta:any)=>{
        this.paises=respuesta;
        console.log(respuesta);
      });
  }*/



}
