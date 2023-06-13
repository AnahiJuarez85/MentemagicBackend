import { Component } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';

@Component({
  providers: [SpeechRecognitionService],
  selector: 'app-root',
  templateUrl:'prueba.component.html',
  styleUrls: ['prueba.component.css']
})
export class PruebaComponent {
  title = 'app works!';

  constructor(private speech: SpeechRecognitionService){
    this.speech.record('es_ES')
      .subscribe(e =>this.title = e)
  }
}

