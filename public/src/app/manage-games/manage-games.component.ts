import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-games',
  templateUrl: './manage-games.component.html',
  styleUrls: ['./manage-games.component.css']
})

export class ManageGamesComponent implements OnInit {
  gameNo: number = 1

  constructor() { }

  ngOnInit() {
  }
}
