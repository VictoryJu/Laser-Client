import { AdminService } from './admin.service';
import { UserService } from './user.service';
import { GameService } from './game.service';
import { Injectable } from '@angular/core';

@Injectable() 
    //모듈을 빼주는 최상위 클래스
export class ApiService {
    constructor(public _game:GameService,public _user:UserService,public _admin:AdminService) {}
}
