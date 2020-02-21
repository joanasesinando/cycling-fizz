import { Component, OnInit } from '@angular/core';

export interface FormObject {
  username: string;
  firstName: string;
  lastName: string;
  // avatar: string;
  // eula: boolean;

}

@Component({
  selector: 'app-modal-complete-registration',
  templateUrl: './modal-complete-registration.component.html',
  styleUrls: ['./modal-complete-registration.component.scss']
})

export class ModalCompleteRegistrationComponent implements OnInit {

  formData: FormObject;


  constructor() {
    this.formData = ({} as FormObject);
  }

  ngOnInit(): void {
  }

  completeRegistration(){
    console.log("completeRegistration")
  }

}
