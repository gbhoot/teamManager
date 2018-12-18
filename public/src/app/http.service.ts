import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllPlayers() {
    return this._http.get('/db/v1/players');
  };

  getOnePlayer(id: string) {
    return this._http.get('/db/v1/players/'+ id);
  };

  createNewPlayer(player: any) {
    return this._http.post('/db/v1/players', player);
  };

  removeAllPlayers() {
    return this._http.delete('/db/v1/players');
  };

  removeOnePlayer(id: string) {
    return this._http.delete('/db/v1/players/'+ id);
  };

  updateStatus(id: string, player: any) {
    return this._http.put('/db/v1/players/'+ id, player);
  };
}
