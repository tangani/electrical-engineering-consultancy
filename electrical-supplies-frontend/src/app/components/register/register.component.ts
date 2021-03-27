import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userSvc: UserService,
    private router: Router
  ) { }

  myForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]]
    });
  }

  /*
  getStarted() {
    const emailAddress = this.myForm.value.emailAddress;
    // if (this.userSvc.isFreeEmail(emailAddress)) {
    //   return this.notificationSvc.errorMessage
    //     ('Error: Please note that free emails are not permitted. Visit www.techoasis.co.za and get a domain');
    // }
    const user = new User();
    user.emailAddress = emailAddress;
    this.userSvc.getStarted(user).subscribe(data => {
      this.notificationSvc.successMessage
      ('Congratulations, We have sent you a message to confirm your Email Address. Please check incl your Spam');
      this.router.navigateByUrl('/home');
    }, error => {
      this.notificationSvc.errorMessage(error);
    });
  }
   */

}
