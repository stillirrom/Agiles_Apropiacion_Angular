import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  apiURL = 'https://apropiacion.herokuapp.com';

  constructor(private route: ActivatedRoute, private registerService: RegisterService, private location: Location, private router: Router) {
  }

  register() {
    const result = this.registerService.register(
      this.registerForm.get('username').value, this.registerForm.get('password').value,
      this.registerForm.get('first_name').value, this.registerForm.get('last_name').value,
      this.registerForm.get('email').value);
    window.location.href = this.apiURL;
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
