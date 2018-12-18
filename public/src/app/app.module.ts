import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageGamesComponent } from './manage-games/manage-games.component';
import { StatusGame1Component } from './status-game1/status-game1.component';
import { StatusGame2Component } from './status-game2/status-game2.component';
import { StatusGame3Component } from './status-game3/status-game3.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerAddComponent,
    ManagePlayersComponent,
    ManageGamesComponent,
    StatusGame1Component,
    StatusGame2Component,
    StatusGame3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
