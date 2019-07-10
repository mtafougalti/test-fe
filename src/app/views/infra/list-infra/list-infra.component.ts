import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/Server';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-list-infra',
  templateUrl: './list-infra.component.html',
  styleUrls: ['./list-infra.component.css']
})
export class ListInfraComponent implements OnInit {

  serverMap : Map<string, Server[]>;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
   
    this.httpClientService.getInfraMap().subscribe(
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
        //this.listEnv = data;
      })
  };

  yaml(response) {
    console.log(response);
    this.serverMap = response;
  }

}
