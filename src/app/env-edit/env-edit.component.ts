import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClientService } from '../service/http-client.service';
import { Environment } from '../Environment';

@Component({
  selector: 'app-env-edit',
  templateUrl: './env-edit.component.html',
  styleUrls: ['./env-edit.component.css']
})
export class EnvEditComponent implements OnInit {

  editForm: FormGroup;
  id: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router:Router, private httpClientService: HttpClientService) {
    this.editForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      database: new FormControl()
   });
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.httpClientService.get(this.id).subscribe(response => {
      this.editForm = this.fb.group({
        id : this.fb.control(this.id),
        name : this.fb.control(response['name']),
        description : this.fb.control(response['description']),
        database : this.fb.control(response['database'])
      });
    });

  }

  onSubmit() {
    this.httpClientService.update(this.editForm.value)
      .subscribe( data => {
        this.router.navigate(['list-env']);
      });
  }

  cancel(): void {
    this.router.navigate(['list-env']);
  };

}
