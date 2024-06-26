import { Component, Input } from '@angular/core';
import { Imovie } from '../utils';

@Component({
  selector: 'app-info-modal',
  standalone: true,
  imports: [],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.scss'
})
export class InfoModalComponent {
  @Input() movie!: Imovie;
}


