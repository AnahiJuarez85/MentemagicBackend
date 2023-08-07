import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LetterService } from '../../services/letter.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private letterService: LetterService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form): void {
    this.letterService.createLetter(form.value).subscribe(res => {
      this.router.navigateByUrl('/ModuloLetras');
    });
  }
}
    
  
