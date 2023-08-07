import { Component, OnInit } from '@angular/core';
import { letra } from 'src/app/interface/letras';
import { LetterService } from '../../services/letter.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modulos-letras',
  templateUrl: './modulos-letras.component.html',
  styleUrls: ['./modulos-letras.component.css']
})
export class ModulosLetrasComponent implements OnInit {
  listletras: letra[];

  constructor(private letterService: LetterService) { }

  ngOnInit() {

    this.letterService.readLetter().pipe(
      map((res: any) => res.letters) 
    ).subscribe((letters: letra[]) => {
        this.listletras = letters;
    });
  }

}
