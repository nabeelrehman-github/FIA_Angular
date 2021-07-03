export class ReceiptRequest {
    mainHeadId: number;
    bankAccount: string;
    bankDateTime: string;
    details: string;
    userId: string
    formEntries: Object[]
}


export interface SimpleHashMap {
    [key: number]: string;
  }