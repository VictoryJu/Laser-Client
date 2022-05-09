
interface IRefDatas {
    close: () => void;
}

export function getCookie(cookieName){
    var cookieValue=null;
    if(document.cookie){
        var array = [];
        var array1=document.cookie.split((escape(cookieName)+'='));
        var array2=document.cookie.split(' ' + (escape(cookieName)+'='));
        if(array1.length >= 2 && document.cookie.indexOf(escape(cookieName)+'=') === 0){
            array = array1;
        }
        if(array2.length >= 2 ){
            array = array2;
        }
        if(array.length >= 2){
            var arraySub=array[1].split(';');
            cookieValue=unescape(arraySub[0]);
        }
    }
    return cookieValue;
}
export function setCookie(name: string, value: string, expireTime?: Date | number | string) {
    let expires = "";
    if (expireTime) {
        const date = new Date(expireTime);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + escape(value || "")  + expires + "; path=/";
}

export async function logout() {
    setCookie('SSID', '');
}

export function matClose(refData:IRefDatas) {
    refData.close();
    console.log('모달창 닫기');
}

export function getQueryString(data: any) {
    return '?' + Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');
}

export function transformBirthday(birthday) {
    let year = birthday.slice(0, 4);
    let month = birthday.slice(4, 6);
    let day = birthday.slice(6, 8);
    return `${year}.${month}.${day}`;
}