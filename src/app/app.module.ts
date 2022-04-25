import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { GamePageModule } from './module/page/game-page/game-page.module';
import { MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { SocketService } from './service/socket.service';
import { AdminPageModule } from './module/page/admin-page/admin-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', loadChildren: ()=> GamePageModule},
      {path: 'admin',loadChildren: ()=>AdminPageModule}
    ])
  ],
  providers: [
    SocketService,
    {
        provide: MAT_DIALOG_DEFAULT_OPTIONS,
    
        useValue: (() => {
            const config = new MatDialogConfig();
            config.panelClass = `mat-default-dialog-panel`;
            return {
                ...config,
        } as MatDialogConfig;
    })()
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
