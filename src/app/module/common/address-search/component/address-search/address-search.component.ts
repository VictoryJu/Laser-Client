import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

declare let daum: any;

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./address-search.component.scss']
})
export class AddressSearchComponent implements OnInit {

    @Output() onSubmit = new EventEmitter<{
        zipCode: string;
        address: string;
        addressEng: string;
    }>();
    @ViewChild('mapWrapper') mapWrapper: ElementRef;
    mapWrapperHeight: number;

  constructor(public _renderer2: Renderer2, private _zone:NgZone) { }

  ngOnInit(): void {
    this.init();
  }

  type: any;
  //onAddres === 주문자, onAddress2 ===받는이
  @Input() set onAddress(v){
    if (v) {
      this.type = 'order'
      this._onAddress = true
      this.openDaumApi();
    }
  }

  _onAddress= false;
  get onAddress(){
    return this._onAddress;
  }


  async init() {
    await this.loadScript();
  }
  loadScript() {
    return new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        resolve();
      };
    });
  }
  initedOpenDaumApi = false;
  openDaumApiReceive() {
    const element = this.mapWrapper.nativeElement;
    if (!element) {
      return;
    }
    if (this.initedOpenDaumApi) {
      if (element.style.display === 'block') {
        this._renderer2.setStyle(element, 'display', 'none');
      } else {
        this._renderer2.setStyle(element, 'display', 'block');
      }
    }
    this.initedOpenDaumApi = true;
    daum.postcode.load(() => {
      new daum.Postcode({
        oncomplete: (data) => {
          console.log(data);
          
          let fullAddr = '',
          extraAddr = '',
          engAddr = '',
          zipCode = '';
          if (data.userSelectedType === 'R') {
            fullAddr = data.roadAddress;
            zipCode = data.zonecode;
            engAddr = data.roadAddressEnglish;
            if (data.bname !== '') {
              extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
              extraAddr +=
                extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? ' (' + extraAddr + ')' : '';
          } else {
            fullAddr = data.jibunAddress;
            zipCode = data.zonecode;
            engAddr = data.jibunAddressEnglish;
          }
          const result = {
            zipCode: zipCode,
            address: fullAddr,
            addressEng: engAddr,
          };
          this._zone.run(()=>{
            this.onSubmit.emit(result);
          });
        },
        onclose: () => {
          // wrapper 감춤
          this._renderer2.setStyle(element, 'display', 'none');
        },
        onresize: (size) => {
          //  ($target.style.height = size.height + 'px')
          // wrapper 높이값 재설정
          this._renderer2.setStyle(element, 'height', size.height + 'px');
        },
        width: '100%',
        height: '100%',
      }).embed(element);
    });
  }
  width=500;
  height=600
  openDaumApi() {
    if (this.onAddress === false) {
      return
    };
    const element = this.mapWrapper.nativeElement;
    if (!element) {
      return;
    }
    if (this.initedOpenDaumApi) {
      if (element.style.display === 'block') {
        this._renderer2.setStyle(element, 'display', 'none');
      } else {
        this._renderer2.setStyle(element, 'display', 'block');
      }
    }
    this.initedOpenDaumApi = true;
    daum.postcode.load(() => {
      new daum.Postcode({
        oncomplete: (data) => {
          console.log(data);
          
          let fullAddr = '',
          extraAddr = '',
          engAddr = '',
          zipCode = '';
          if (data.userSelectedType === 'R') {
            fullAddr = data.roadAddress;
            zipCode = data.zonecode;
            engAddr = data.roadAddressEnglish;
            if (data.bname !== '') {
              extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
              extraAddr +=
                extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? ' (' + extraAddr + ')' : '';
          } else {
            fullAddr = data.jibunAddress;
            zipCode = data.zonecode;
            engAddr = data.jibunAddressEnglish;
          }
          const result = {
            zipCode: zipCode,
            address: fullAddr,
            addressEng: engAddr,
          };
          this._zone.run(() => {
            
              this.onSubmit.emit(result);
            
          });
        },
        onclose: () => {
          // wrapper 감춤
          this._renderer2.setStyle(element, 'display', 'none');
        },
        onresize: (size) => {
          //  ($target.style.height = size.height + 'px')
          // wrapper 높이값 재설정
          this._renderer2.setStyle(element, 'height', size.height + 'px');
        },
        width: '100%',
        height: '100%',
    //   }).embed(element);
      }).open({
          left: (window.screen.width/2)-(this.width),
          top: (window.screen.height/2)-(this.height)
      });
    });
  }

}
