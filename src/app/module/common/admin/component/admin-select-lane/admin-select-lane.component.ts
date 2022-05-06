import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { ApiService } from 'src/app/service/api-service';
import { SignalRService } from 'src/app/service/signal-r.service';
import { AdminGameConfigComponent } from '../admin-game-config/admin-game-config.component';

@Component({
  selector: 'app-admin-select-lane',
  templateUrl: './admin-select-lane.component.html',
  styleUrls: ['./admin-select-lane.component.scss']
})

export class AdminSelectLaneComponent implements OnInit {

  constructor(public _matRef: MatDialogRef<AdminSelectLaneComponent>, private _router: Router, @Inject(MAT_DIALOG_DATA) public data: { matchId: string }, public _api: ApiService, public _mat: MatDialog, public _signal: SignalRService) { }

  ngOnInit(): void {
  }


  people: number;
  matchId: string;
  openGame() {
    this._router.navigate(['/admin/relay/'], { queryParams: { players: this.people, gameId: this.matchId } });
  }

  selectedLane = ["선택", "선택", "선택", "선택", "선택", "선택", "선택", "선택"];
  lane = Array.from({ length: 80 }, (v, i) => i + 1);
}
