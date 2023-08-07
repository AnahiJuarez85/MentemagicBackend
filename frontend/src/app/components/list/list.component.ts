import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interface/users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listusers: user[]=[
    {id:1, correo:'juan@lulu.com',name:'juan', edad:6, ciudad:'Sansare'},
    {id:2, correo:'juan@lulu.com', name:'Maria', edad:5, ciudad:'Jalapa'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
