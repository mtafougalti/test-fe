import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'env-add',
  templateUrl: './env-add.component.html',
  styleUrls: ['./env-add.component.css']
})
export class EnvAddComponent implements OnInit {

  addForm: FormGroup;
  yamlConfig : Object;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      database: new FormControl()
   });
  }

  onSubmit() {
    this.httpClientService.add(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-env']);
      });
  }

  cancel(): void {
    this.router.navigate(['list-env']);
  };


}
