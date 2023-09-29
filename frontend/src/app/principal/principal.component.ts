import { Component, OnInit } from '@angular/core';
import { letra } from 'src/app/interface/letras';
import { LetterService } from '../services/letter.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  botones = ['O', 'A', 'I', 'U', 'E', 'M', 'P', 'L','S','D','N','R','B','V', 'G', 'J', 'C', 'H', 'K', 'Ñ', 'T','LL','W','X','Y','Z'];
  //botones = [];

  pruebas = ['1', '2', '3'];
  listletras: letra[];

  constructor(private letterService: LetterService) { }

  ngOnInit() {

   /* this.letterService.readLetter().pipe(
      map((res: any) => res.letters) 
    ).subscribe((letters: letra[]) => {
      letters.forEach((letra: letra) => {
        this.botones.push(letra.letra.toUpperCase());
      });
    });*/
  }
}