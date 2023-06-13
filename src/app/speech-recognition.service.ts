import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

interface IWindow extends Window {
  webkitSpeechRecognition?: any;
}

@Injectable()
export class SpeechRecognitionService {

   recognition: any;

  constructor(private zone: NgZone) {}

  record(language: string): Observable<string> {
    return Observable.create(observer => {
      const { webkitSpeechRecognition }: IWindow = window;
      if (!webkitSpeechRecognition) {
        observer.error('El reconocimiento de voz no es compatible con el navegador.');
        return;
      }

      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onresult = e =>
        this.zone.run(() =>
          observer.next(e.results.item(e.results.length - 1).item(0).transcript)
        );
      this.recognition.onerror = e => observer.error(e);
      this.recognition.onend = () => observer.complete();
      this.recognition.lang = language;
      this.recognition.start();
    });
  }

  stop() {
      this.recognition.stop();
  }
}
