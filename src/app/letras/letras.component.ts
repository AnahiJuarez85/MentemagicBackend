import { Component, ViewChild, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';

@Component({
  providers: [SpeechRecognitionService],
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent implements OnInit {

  constructor(private speech: SpeechRecognitionService) { }
  mostrar: boolean = false;

  ngOnInit() {
  }

  playAudio() {
    const audio = new Audio('assets/sonidos/o.mp4');
    audio.play();
      this.mostrar = true; 
    
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

  pronunciar(texto: string){
    this.speech.record('es_ES')
    .subscribe(e => {

        //console.log(e);

        console.log('estoy buscando|' + texto + '|Tengo|' + e + '|');

        if(texto.toUpperCase() == e.toUpperCase().trim()){
          this.detener();

          var element = document.getElementById(texto);
          element.hidden = false;           
        }
    });
  }

  detener(){
    this.speech.stop();
    console.log("se detuvo")
  }
}
