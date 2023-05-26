import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-configure-form',
  templateUrl: './configure-form.component.html',
  styleUrls: ['./configure-form.component.css']
})
export class ConfigureFormComponent implements OnInit {

  configureForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.configureForm = this.formBuilder.group({
      jiraUsername: ['', Validators.required],
      jiraPassword: ['', Validators.required],
      jiraURL: ['', Validators.required],
      repositoryName: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.configureForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.configureForm.invalid) {
        return;
    }
    alert('Form Submitted Successfully');
  }

}