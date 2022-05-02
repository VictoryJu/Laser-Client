import { Component,  OnInit,} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-network-config',
  templateUrl: './admin-network-config.component.html',
  styleUrls: ['./admin-network-config.component.scss']
})
export class AdminNetworkConfigComponent implements OnInit {

  constructor(public _matDialogRef:MatDialogRef<AdminNetworkConfigComponent>) { }

  ngOnInit(): void {
  
  }

  
}
