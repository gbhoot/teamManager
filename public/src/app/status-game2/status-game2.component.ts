import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-status-game2',
  templateUrl: './status-game2.component.html',
  styleUrls: ['./status-game2.component.css']
})
export class StatusGame2Component implements OnInit {
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
