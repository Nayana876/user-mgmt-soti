import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //html-only 1-mandatory
  styleUrls: ['./app.component.scss'], //can be more than 1 = optional
  
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'user-mgmt-soti';
}



// dd