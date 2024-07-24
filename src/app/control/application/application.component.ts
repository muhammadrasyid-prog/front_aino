import { Component } from '@angular/core';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent {

  // openAddApplicationModal() {
  //   ($('#addApplicationModal') as any).removeClass('hidden').addClass('flex');
  // }

  // ngOnInit() {
  //   // Close modal when close button is clicked
  //   ($('#closeModalButton') as any).click(() => {
  //     ($('#addApplicationModal') as any).removeClass('flex').addClass('hidden');
  //   });
  // }

}
