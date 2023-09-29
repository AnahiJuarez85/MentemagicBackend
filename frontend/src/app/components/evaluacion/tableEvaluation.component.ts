import { Component, OnInit } from '@angular/core';
import { letra } from 'src/app/interface/letras';
import { LetterService } from '../../services/letter.service';
import { map } from 'rxjs/operators';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { evaluacion } from 'src/app/interface/evaluations';

@Component({
  selector: 'app-tableEvaluation',
  templateUrl: 'tableEvalution.component.html',
  styleUrls: ['./tableEvaluation.component.css']
})
export class tableEvaluationcomponent implements OnInit {
  listletras: evaluacion[];

  constructor(private evaluationService : EvaluationService ) { }

  ngOnInit() {

    this.evaluationService.readEvaluation().pipe(
      map((res: any) => res.letters) 
    ).subscribe((letters: letra[]) => {
        this.listletras = letters;
    });
  }

}
