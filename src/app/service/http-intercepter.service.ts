import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpParams,
    HttpRequest,
    HttpResponse
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Observable } from "rxjs";
  import { tap, map } from "rxjs/operators";
  import { Router } from "@angular/router";
import { getCookie, logout } from "../lib/utils";
  
  @Injectable()
  export class HttpInterceptorService implements HttpInterceptor {
    constructor( private _router: Router) {
    }
  
    isSessionExpired = false;
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('들어가기점');
      req = req.clone({ //http요청전
        
        headers: new HttpHeaders()
          .append('sessionkey', (getCookie('SSID') || '')),
        params:
          (req.params ? req.params : new HttpParams())
      });
      
      return next.handle(req).pipe(
        tap( 
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) { //http요청후 성공했을때
            }
          },
          res => { //http요청후 실패했을때
            if (res.status === 400) {
              console.log(getCookie('SSID'));
              
              if (res.error && res.error.msg) {
                if(res.error.msg === "세션 정보를 입력해 주세요." && getCookie('SSID')){
                  console.log('로그아웃');
                }
              } else {
                console.log(res)
                alert('알 수 없는 에러입니다.');
              }
            }
          }
        )
      );
    }
  }