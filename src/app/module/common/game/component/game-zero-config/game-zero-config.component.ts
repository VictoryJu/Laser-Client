import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocketService } from 'src/app/service/socket.service';

@Component({
  selector: 'app-game-zero-config',
  templateUrl: './game-zero-config.component.html',
  styleUrls: ['./game-zero-config.component.scss']
})
export class GameZeroConfigComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<GameZeroConfigComponent>,private _socket:SocketService, private render: Renderer2, @Inject(MAT_DIALOG_DATA) public data:{zeroX:number,zeroY:number}) { }
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

  threshole = 70;
  zeroX=320;
  zeroY=240;

  centerX=320;
  centerY=240;
  dotArr=[];
    mouseOffset(e){
        if(this.dotArr.length > 3){
            this.zeroX= e.offsetX;
            this.zeroY= e.offsetY; 
        }
        if(this.dotArr.length < 4){
            let obj = {x:e.offsetX,y:e.offsetY}

            this.dotArr.push(obj);
            console.log(this.dotArr.length);
        }
    }


    saveZeroConfig(){
        let zeroX;
        let zeroY;
        zeroX = this.centerX - this.zeroX;
        zeroY = this.centerY- this.zeroY ;
        console.log(zeroX, zeroY);
        
        this.setThreshold();
        this._matRef.close({zeroX,zeroY});
    }

    setThreshold(){
    this._socket.seneMessage(this.threshole.toString());
    }
}
