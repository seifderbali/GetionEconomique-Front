import { Component } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent {
  user: String = new String;
  siteKey:string;
  captchaValue: string = '';

  constructor() {
this.siteKey = '6LeL2c0nAAAAAD36gO5G-t5FVRBCYLBsod6kk9Hb';
  }

  onSubmit() {
    console.log(this.user);

  }
  captchaResolved() {

    if (this.captchaValue) {
      // The captcha has been completed, proceed with your logic
      // Your onSubmit logic here...
    } else {
      // Display an error message or handle the case where the captcha is not completed
    }
  }
}


