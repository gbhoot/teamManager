import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-status-game3',
  templateUrl: './status-game3.component.html',
  styleUrls: ['./status-game3.component.css']
})
export class StatusGame3Component implements OnInit {
  players: any;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getPlayerData();
  };

  getPlayerData() {
    let observable = this._httpService.getAllPlayers();
    observable.subscribe(data => {
      this.players = data['players'];
      this.addFullName();
    });
  };

  addFullName() {
    for (var idx in this.players) {
      this.players[idx].fullName = this.players[idx].fName +' '+ this.players[idx].lName
    };
  };
}
