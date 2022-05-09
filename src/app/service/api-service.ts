import { GameService } from './game.service';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
    //모듈을 빼주는 최상위 클래스
export class ApiService {
    constructor(public _game:GameService,public _user:UserService,public _admin:AdminService,) {}
}