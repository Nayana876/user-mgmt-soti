import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class='text-center'>
      <hr>
      
      <app-menu>
      <div class='text-center'>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Back to top</a>
          </li>
        </ul>
      </div>      
      </app-menu>
      <p class='grey'>Developed in Sep 2021</p>
      <p class='red'>Copyright 2021</p>
    </div>
    
  `,
  // internal style for footer component
  styles: [
    `
    .grey{
      color: grey;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
