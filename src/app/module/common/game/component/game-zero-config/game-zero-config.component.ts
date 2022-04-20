import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocketService } from 'src/app/service/socket.service';
import { environment } from 'src/environments/environment';

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

  environment = environment;

  threshole = 70;
  zeroX=320;
  zeroY=240;

  centerX=320;
  centerY=240;
  dotArr=[];
  sinArr=[];
  realLengh = 422;

    mouseOffset(e){
        if(this.dotArr.length > 3){
            this.zeroX= e.offsetX;
            this.zeroY= e.offsetY; 
        }
        if(this.dotArr.length < 4){
            let obj = {x:e.offsetX,y:e.offsetY}
            console.log(obj);
            
            this.sinArr.push(obj);
            this.dotArr.push(obj);
            console.log(this.dotArr.length);
        }
    }

    arr = [];
    clickArr(){
        this.arr = [];
        let baseX = 150;
        let baseY = 38;
        let deltaX =  307 - this.zeroX;
        let deltaY = 245 - this.zeroY;
        
        
        for(let i = 0; i<21; i++){
            let radian = 45 * Math.PI / 180;
            let distance = i *30.65 ;
            if(i>10){
                distance = (i-10) * 30.65;
                radian = 225 * Math.PI / 180;
            }

            
                let mX = (817.5/2 + (distance * Math.cos(radian))) * 0.3840 + baseX + deltaX;
                let my = (613/2 + (distance * Math.sin(radian))) * 0.6753 + baseY - deltaY;
                this.arr.push({x:mX,y:my});
            

            
            let xh = (i *40.875) * 0.3840 + baseX + deltaX;
            let yh = (613/2 * 0.6753) + baseY - deltaY;
            this.arr.push({x:xh , y:yh});
            let xv = 817.5/2 * 0.3840 + baseX + deltaX;
            let yv =  (i*30.65) * 0.6753 + baseY - deltaY;
            this.arr.push({x:xv , y:yv});
            // let xh2 = (i *40.875) * 0.3840 + baseX + deltaX;
            // let yv2 =  (i*30.65) * 0.6753 + baseY - deltaY;
            // this.arr.push({x:xh2, y:yv2});
        }
    }


    saveZeroConfig(){
        let zeroX;
        let zeroY;
        let topLength = Math.abs(this.sinArr[1] - this.sinArr[0]);
        let bottomLength = Math.abs(this.sinArr[2] - this.sinArr[3]);

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
