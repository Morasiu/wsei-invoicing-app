import { Component, OnInit } from '@angular/core';
import { ClientInfo, ClientInfoService } from '../model/client-info-service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {
  public model: ClientInfo;
  submitted: boolean;

  suggestions: string[] = [];

  constructor(private clientInfoService: ClientInfoService) {
    this.model = {
      name:"",
      taxNumber:""
    }
   }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.clientInfoService.saveClientInfo(this.model);
  }

  edit(){
    this.submitted = false;
  }

  handleAutocompleteName($event: any): void {
    this.suggestions = this.clientInfoService.getClientInfos().map(data => data.name).filter(data => data.startsWith($event.target.value)).slice(0, 3);
  }

  selectSuggestion(suggestion: string): void {
    this.model = this.clientInfoService.getClientInfos().find(data => data.name === suggestion);
    this.suggestions = [];
    this.submitted = true;
  }
}
