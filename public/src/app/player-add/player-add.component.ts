import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {
  playerD: any;
  
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.resetPlayer();
  }

  resetPlayer() {
    this.playerD = {
      fName: "",
      lName: "",
      position: "Goalkeeper",
      role: ""
    };
  };

  addNewPlayer(event: any) {
    console.log(this.playerD);
    let observable = this._httpService.createNewPlayer(this.playerD);
    observable.subscribe(data => {
      console.log(data);
      if (data['message'] == "Success") {
        this._router.navigate(['/players/list']);
      } else {
        alert(data['error']);
      };
    });
  };
}
