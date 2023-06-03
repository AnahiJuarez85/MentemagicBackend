import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playAudio() {
    const audio = new Audio('assets/sonidos/o.mp4');
    audio.play();
  }
  audioOso() {
    const audio = new Audio('assets/sonidos/oso.mp4');
    audio.play();
  }
  audioOlla() {
    const audio = new Audio('assets/sonidos/olla.mp4');
    audio.play();
  }
  audioOjo() {
    const audio = new Audio('assets/sonidos/ojo.mp4');
    audio.play();
  }
}
