import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LetterService } from '../../services/letter.service';

@Component({
  selector: 'app-evaluacion.component',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class Evaluacioncomponent implements OnInit {

  showButton = false;

  constructor(private letterService: LetterService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form): void {
    this.letterService.createLetter(form.value).subscribe(res => {
      this.router.navigateByUrl('/ModuloLetras');

      this.showButton = true;
    });
  }

  navigateToModule(): void {
    this.router.navigateByUrl('/principal');
  }}