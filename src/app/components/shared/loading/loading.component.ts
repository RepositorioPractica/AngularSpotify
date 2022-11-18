import { Component, OnInit } from '@angular/core';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  fuenteRefresh = faRefresh;

  constructor() { }

  ngOnInit(): void {
  }

}
