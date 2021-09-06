import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-ceb',
  template: `
  <div>
    <p>
       CEB works!
       <button type="button" (click)="handleSendData()">Send data</button>
    </p>
  </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  profileData: any ={
    firstName:'Nayana',
    city:'New Jersey',
    zip: 53444
  }

  @Output() profileLoaded: EventEmitter<any> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleSendData(){
    console.log("send data ");
    this.profileLoaded.emit(this.profileData);
  }

  // handleProfileLoaded(event: any){
  //   console.log("inside handleProfileLoaded");
  //   console.log(event);
  // }

}
