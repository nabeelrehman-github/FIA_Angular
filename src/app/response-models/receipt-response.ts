export namespace ReceiptResponseModels{
    export class SubHeads{
        id:number;
        mainHeadId:number;
        subHeadName:string;
        dateTime:string;
    }
    export class HeadsInfo{
        id:number;
        mainHeadName:string;
        subHeads:SubHeads[];
    }
    export class Accounts{
        id:number;
        bankAccount:string;
        accountTitle:string;
        bankNameId:number;
    }
    export class BankInfo{
        id:number;
        bankName:string;
        accounts:Accounts[]
    }
    export class ReceiptResponse{
        responseCode:number;
        responseDesc:string;
        headsInfo:HeadsInfo[]
        bankInfo:BankInfo[]
    }
}