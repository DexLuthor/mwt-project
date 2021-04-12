import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilmsRoutingModule} from './films-routing.module';
import {FilmsMenuComponent} from './films-menu/films-menu.component';
import {FilmsListComponent} from './films-list/films-list.component';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import {FilmEditComponent} from './film-edit/film-edit.component';
import {MaterialModule} from '../../app/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {PostavaComponent} from './postava/postava.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FilmAddComponent } from './film-add/film-add.component';


@NgModule({
  declarations: [
    FilmsMenuComponent,
    FilmsListComponent,
    FilmDetailComponent,
    FilmEditComponent,
    PostavaComponent,
    PostavaComponent,
    FilmAddComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    MaterialModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    ReactiveFormsModule
  ]
})
export class FilmsModule {
}
