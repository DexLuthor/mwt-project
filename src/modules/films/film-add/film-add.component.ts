import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})
export class FilmAddComponent implements OnInit {

  @Output() filmSaved = new EventEmitter<any>();
  filmEditForm = new FormGroup({
    filmName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    year: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern('\\d+')
    ]),
    slovakName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  get filmName(): FormControl {
    return this.filmEditForm.get('filmName') as FormControl;
  }

  get year(): FormControl {
    return this.filmEditForm.get('year') as FormControl;
  }

  get slovakName(): FormControl {
    return this.filmEditForm.get('slovakName') as FormControl;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const film = {
      nazov: this.filmName.value,
      slovenskyNazov: this.slovakName.value,
      rok: this.year.value,
      reziser: [],
      postava: []
    };

    this.filmSaved.emit(film);
  }
}
