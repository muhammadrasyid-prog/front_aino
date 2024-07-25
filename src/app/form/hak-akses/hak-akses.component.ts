import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hak-akses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hak-akses.component.html',
  styleUrls: ['./hak-akses.component.css']
})
export class HakAksesComponent {
  
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
