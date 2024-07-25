import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-itcm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-itcm.component.html',
  styleUrl: './form-itcm.component.css'
})
export class FormItcmComponent {

  isModalAddOpen = false;
  isModalUpdateOpen = false;
  isModalApproveOpen = false;

  openModalAdd() {
    this.isModalAddOpen = true;
  }

  closeModalAdd() {
    this.isModalAddOpen = false;     
  }

  openModalUpdate() {
    this.isModalUpdateOpen = true;
  }

  closeModalUpdate() {
    this.isModalUpdateOpen = false;
  }

  openModalApprove() {
    this.isModalApproveOpen = true;
  }

  closeModalApprove() {
    this.isModalApproveOpen = false;
  }

  onDeleteFormITCM() {
    Swal.fire({
      title: "Konfirmasi",
      text: "Anda yakin ingin menghapus Formulir ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result: any) => {
      if (result.isConfirmed) {
        // Anda bisa melakukan tindakan lain di sini jika diperlukan
        // Misalnya, menampilkan pesan atau melakukan sesuatu setelah konfirmasi
        console.log("Pengguna mengonfirmasi penghapusan.");
      } else {
        console.log("Pengguna membatalkan penghapusan.");
      }
    });
  }
  
}
