import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-target-config',
  templateUrl: './game-target-config.component.html',
  styleUrls: ['./game-target-config.component.scss']
})
export class GameTargetConfigComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<GameTargetConfigComponent>, @Inject(MAT_DIALOG_DATA) public data:{selectTarget:string}) { }

  ngOnInit(): void {
  }

  cancleTargetConfig(){
      this._matRef.close();
  }
  closeTargetConfig(){
      this._matRef.close({selectTarget:this.targetType});
  }
  targetType = this.data.selectTarget;
  environment = environment;
}
