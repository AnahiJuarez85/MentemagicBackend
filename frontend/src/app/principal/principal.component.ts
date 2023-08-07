import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  botones = ['O', 'A', 'I', 'U', 'E', 'M', 'P', 'L','S','D','N','R','B',
            'V', 'G', 'J', 'C', 'H', 'K', 'Ñ', 'T','LL','W','X','Y','Z'];

  constructor() { }

  ngOnInit() {
  }

  
  

}
