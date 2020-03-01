import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  modelForm: FormGroup;
  isFormValid = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: '',
      question: ['', Validators.required],
      studio: ''
    }, {updateOn: 'submit'});
  }

  onSubmit(form: FormGroup): void {
    console.log(form);
    this.isFormValid = form.valid;
  }

}
