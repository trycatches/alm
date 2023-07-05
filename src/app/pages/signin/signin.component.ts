import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  signinForm;
  attempts:any = {
    status:false,
    count:0,
    processing:false
  };

  constructor(private fb: FormBuilder, private router: Router) {

    this.signinForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
   }
  
  signin(){
    this.attempts.count++;
    this.attempts.status = true;
    this.attempts.processing = true;
    setTimeout(()=>{this.router.navigate(['/dashboard/data-leads']);}, 1000);
    

    console.log(this.attempts,this.signinForm);
  }

}
