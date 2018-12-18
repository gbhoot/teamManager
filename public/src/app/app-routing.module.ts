import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageGamesComponent } from './manage-games/manage-games.component';
import { StatusGame1Component } from './status-game1/status-game1.component';
import { StatusGame2Component } from './status-game2/status-game2.component';
import { StatusGame3Component } from './status-game3/status-game3.component';

const routes: Routes = [
  {path: 'players', component: ManagePlayersComponent, children: [
    {path: 'list', component: PlayerListComponent},
    {path: 'addPlayer', component: PlayerAddComponent},
  ]},
  {path: 'status', component: ManageGamesComponent, children: [
    {path: 'game/1', component: StatusGame1Component},
    {path: 'game/2', component: StatusGame2Component},
    {path: 'game/3', component: StatusGame3Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
