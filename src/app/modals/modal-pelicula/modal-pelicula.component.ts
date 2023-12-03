import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pelicula',
  templateUrl: './modal-pelicula.component.html',
  styleUrls: ['./modal-pelicula.component.css']
})
export class ModalPeliculaComponent {
  @Input() pelicula: any;

  constructor(public activeModal: NgbActiveModal){}
}
