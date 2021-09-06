import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // public variable
  personAge=100;
  // String interpolation related -(give the var in ts and obtain  it in html) ts=>html
  appName='User Management App';
  totalTeamMembers=20;

  // Property Binding- left side =>[] - ts=>html
  companyName='SOTI';

  buttonLabel="Click Me";

  // two way binding -- [ts<=>html] == [()]
  courseName='Angular';

  dataRecievedFromChildComp="";

  constructor() { }

  ngOnInit(): void {
  }

  // Custom methods should come here [html=>ts]- (click)="funName()" HTML calling the function in ts
  handleClickMe(event: any):void{
  
    // alert("Clicked");
    // event.target.innerHtml="Clicked";
    this.buttonLabel="Clicked";
    event.target.disabled="True";

  }
  handleProfileLoaded(event: any){
    console.log("inside handleProfileLoaded");
    console.log(event);
    // this.profileLoaded.emit()
    this.dataRecievedFromChildComp= event.firstName;

  }
}
