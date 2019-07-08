import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-env',
  templateUrl: './list-env.component.html',
  styleUrls: ['./list-env.component.css']
})
export class ListEnvComponent implements OnInit {

  helloMessage: string;
  yamlConfig : Object;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.hello().subscribe(
      response => this.hello(response),
    );

    this.httpClientService.yaml().subscribe(
      response => this.yaml(response),
    );
  }

  addEnv(): void {
    this.router.navigate(['add-env']);
  };

  editEnv(id): void {
    this.router.navigate(['edit-env/' + id]);
  };

  deleteEnv(id: string): void {
    this.httpClientService.delete(id)
      .subscribe( data => {
        this.yamlConfig = data;
      })
  };

  hello(response) {
    this.helloMessage = response;
    console.log(this.helloMessage);
  }

  yaml(response) {
    this.yamlConfig = response;
    console.log(this.yamlConfig);
  }

}
