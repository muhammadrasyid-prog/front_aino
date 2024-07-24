import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hak-akses',
  templateUrl: './hak-akses.component.html',
  styleUrls: ['./hak-akses.component.css']
})
export class HakAksesComponent implements AfterViewInit, OnDestroy {

  modalToggleButton: HTMLElement | null = null;
  modalCloseButtons: NodeListOf<HTMLElement> | null = null;
  modal: HTMLElement | null = null;

  ngAfterViewInit() {
    this.modalToggleButton = document.querySelector('[data-modal-toggle="default-modal"]');
    this.modal = document.getElementById('default-modal');
    this.modalCloseButtons = document.querySelectorAll('[data-modal-hide="default-modal"]');

    this.addModalEventListeners();
  }

  addModalEventListeners() {
    if (this.modalToggleButton && this.modal) {
      this.modalToggleButton.addEventListener('click', this.showModal);
    }

    if (this.modalCloseButtons) {
      this.modalCloseButtons.forEach(button => {
        button.addEventListener('click', this.hideModal);
      });
    }
  }

  showModal = () => {
    if (this.modal) {
      this.modal.classList.remove('hidden');
      this.modal.classList.add('flex');
    }
  }

  hideModal = () => {
    if (this.modal) {
      this.modal.classList.add('hidden');
      this.modal.classList.remove('flex');
    }
  }

  ngOnDestroy() {
    if (this.modalToggleButton) {
      this.modalToggleButton.removeEventListener('click', this.showModal);
    }

    if (this.modalCloseButtons) {
      this.modalCloseButtons.forEach(button => {
        button.removeEventListener('click', this.hideModal);
      });
    }
  }
}
