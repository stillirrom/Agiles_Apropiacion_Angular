import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;

  constructor(private route: ActivatedRoute, private registerService: RegisterService, private location: Location) { }

  register() {
    const result = this.registerService.register(
      this.registerForm.get('username').value, this.registerForm.get('password').value,
      this.registerForm.get('first_name').value, this.registerForm.get('last_name').value,
      this.registerForm.get('email').value);
    console.log(result);
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),
      password: new FormControl(),
      email: new FormControl()
    });
  }

}
