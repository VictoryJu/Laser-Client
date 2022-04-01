import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<GameConfigComponent>) { }

  ngOnInit(): void {
  }
  closeGameConfig(){
      this._matRef.close();
  }
  slideWidth=5;
}
