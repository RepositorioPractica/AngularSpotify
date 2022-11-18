import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[]=[];

  constructor(private router:Router) { }

  verArtista(item:any){
    let artistaId;
//si el tipo ===artiste muestrame el id y no buscame el id de artista
    if(item.type==='artist'){
      artistaId=item.id;
    }else{
      artistaId=item.artists[0].id;
    }

    //navegar una ruta en particular que tiene un parametro
    this.router.navigate(['/artist',artistaId]);
  }
}
