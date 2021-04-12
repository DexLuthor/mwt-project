import {Component, Input, OnInit} from '@angular/core';
import {Clovek} from '../../../entities/clovek';

@Component({
  selector: 'app-postava',
  templateUrl: './postava.component.html',
  styleUrls: ['./postava.component.css']
})
export class PostavaComponent implements OnInit {
  @Input() postava: Clovek;

  ngOnInit(): void {
  }
}
