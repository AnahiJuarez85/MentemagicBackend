import { TestBed } from '@angular/core/testing';

import { SpeechRecognitionService } from './speech-recognition.service';

describe('SpeechRecognitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be create', () => {
    const service: SpeechRecognitionService = TestBed.get(SpeechRecognitionService);
    expect(service).toBeTruthy();
  });
});
