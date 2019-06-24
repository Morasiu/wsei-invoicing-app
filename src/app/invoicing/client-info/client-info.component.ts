import { Component, OnInit } from '@angular/core';
import { ClientInfo } from '../model/client-info';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  public model: ClientInfo;

  constructor() {
    this.model = {
      name:"",
      taxNumber:""
    }
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model)
  }
}
