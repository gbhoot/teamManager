import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-status-game1',
  templateUrl: './status-game1.component.html',
  styleUrls: ['./status-game1.component.css']
})

export class StatusGame1Component implements OnInit {
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
