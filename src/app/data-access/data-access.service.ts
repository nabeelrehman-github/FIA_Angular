import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LoginResponse } from '../response-models/login-response';
import { LoginRequest } from '../request-models/login-request';
import { ReceiptResponseModels } from '../response-models/receipt-response';
import { ReceiptRequest } from '../request-models/receipt-post';


@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  BASE_URL = 'http://115.186.58.51:8081/des'
  LOGIN = this.BASE_URL +'/authenticate'
  RECEIPT_PREFETCH = this.BASE_URL + "/prefetch/get"
  POST_RECEIPT = this.BASE_URL + "/receipt/post"
  EXPORT_RECEIPT = this.BASE_URL + "/report/export"

  subject = new Subject<string>();
  constructor(
    private http:HttpClient
  ) { }

  authorizeLogin(user:LoginRequest):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.LOGIN,user);
  }

  receiptPrefetch():Observable<ReceiptResponseModels.ReceiptResponse>{
    return this.http.get<ReceiptResponseModels.ReceiptResponse>
      (this.RECEIPT_PREFETCH)
  }

  postReceipt(data: ReceiptRequest): any{
    return this.http.post(this.POST_RECEIPT, data);
  }

  exportReceipt(): any{
    return this.http.post(this.EXPORT_RECEIPT, null, { responseType: "blob" });
  }

  setAuthentication(data:string){
    this.subject.next(data);
  }

  getAuthentication():Observable<string>{
    return this.subject.asObservable();
  }
  
}
