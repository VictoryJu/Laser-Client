
interface IRefDatas {
    close: () => void;
}

export function matClose(refData:IRefDatas) {
    refData.close();
    console.log('모달창 닫기');
}