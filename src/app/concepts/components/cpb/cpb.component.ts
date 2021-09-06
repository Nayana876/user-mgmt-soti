import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {
// Make age as a custom property- make it as a custom roperty to this selecter
  // Step 1 - make as custom property
  @Input() age=20;

  constructor() { }

  ngOnInit(): void {
  }

}
