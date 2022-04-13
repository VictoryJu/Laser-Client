import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-zero-config',
  templateUrl: './game-zero-config.component.html',
  styleUrls: ['./game-zero-config.component.scss']
})
export class GameZeroConfigComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<GameZeroConfigComponent>, private render: Renderer2) { }
  @ViewChild('target') target:ElementRef;
  ngOnInit(): void {
      this.render.listen('window','load',()=>{
          const rect = this.target.nativeElement.getBoundingClientRect().top + window.pageYOffset;
            console.log(this.target.nativeElement.getBoundingClientRect().x);
            
          console.log(rect);
      })
  }

  closeZeroConfig(){
    this._matRef.close();
  }

  threshole = 0;
  zeroX=0;
  zeroY=0;
}
