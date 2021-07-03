import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/data-access/data-access.service';
import { ReceiptResponseModels } from '../../response-models/receipt-response';
import { ReceiptRequest } from '../../request-models/receipt-post';
import { saveAs } from 'file-saver';
declare var $: any;

@Component({
  selector: 'app-receipt-section',
  templateUrl: './receipt-section.component.html',
  styleUrls: ['./receipt-section.component.css']
})
export class ReceiptSectionComponent implements OnInit {

  headsInfoList: ReceiptResponseModels.HeadsInfo[] = null;
  subHeadsList: ReceiptResponseModels.SubHeads[] = null;

  bankInfoList: ReceiptResponseModels.BankInfo[] = null;
  accountsList: ReceiptResponseModels.Accounts[] = null;

  postReceipt: ReceiptRequest = new ReceiptRequest();

  pair: {[key: number]: string}
  details: string = null;
  date: string = null;
  bankValue: string = null;
  subHeadId: number = null;
  subHeadHashMap: Map<string,string> = new Map<string, string>();
  mainHeadId: number = null;

  constructor(private dataService: DataAccessService) { }

  ngOnInit(): void {
    this.callPrefetch()
    // this.data()
  }

  onBankChanged(index) {
    this.accountsList = this.bankInfoList[index].accounts;
    // this.postReceipt.bankAccount = this.accountsList[index].bankAccount
    this.postReceipt.bankAccount = $('#ddlAccounts :selected').val();
  }

  onHeadChanged(index) {
    this.postReceipt.mainHeadId = this.headsInfoList[index].id
    this.subHeadsList = this.headsInfoList[index].subHeads;
    this.subHeadHashMap = new Map<string, string>();
  }

  onAccountChange(){
    this.postReceipt.bankAccount = $('#ddlAccounts :selected').val();
  }

  data() {
    this.headsInfoList = [
      {
        id: 1,
        mainHeadName: "Student Fee",
        subHeads: [
          {
            id: 1,
            subHeadName: "Hostle Dues",
            dateTime: "2021-02-06 11:55:27.0",
            mainHeadId: 1
          },
          {
            id: 2,
            subHeadName: "Tuition Fee",
            dateTime: "2021-02-06 11:55:27.0",
            mainHeadId: 1
          },
          {
            id: 3,
            subHeadName: "Security",
            dateTime: "2021-02-06 11:55:27.0",
            mainHeadId: 1
          },
          {
            id: 4,
            subHeadName: "Transport",
            dateTime: "2021-02-06 11:55:27.0",
            mainHeadId: 1
          }
        ]
      }
    ]

    this.bankInfoList = [
      {
        id: 1,
        bankName: "Bank of Khyber",
        accounts: [
          {
            id: 1,
            bankAccount: "123",
            accountTitle: "Hostle Fee",
            bankNameId: 1
          },
          {
            id: 2,
            bankAccount: "124",
            accountTitle: "Tuition Fee",
            bankNameId: 1
          },
          {
            id: 3,
            bankAccount: "125",
            accountTitle: "Security Fee",
            bankNameId: 1
          },
          {
            id: 4,
            bankAccount: "126",
            accountTitle: "Transport Fee",
            bankNameId: 1
          }
        ]
      },
      {
        id: 2,
        bankName: "National Bank",
        accounts: [
          {
            id: 5,
            bankAccount: "127",
            accountTitle: "Hostle Fee",
            bankNameId: 2
          },
          {
            id: 6,
            bankAccount: "128",
            accountTitle: "Tuition Fee",
            bankNameId: 2
          }
        ]
      }
    ];

    this.accountsList = this.bankInfoList[0].accounts;
    this.subHeadsList = this.headsInfoList[0].subHeads;
  }

  callPrefetch() {
    this.dataService.receiptPrefetch().subscribe(
      res => {
        if (res.responseCode == 4000) {
          this.headsInfoList = res.headsInfo;
          this.bankInfoList = res.bankInfo;

          this.accountsList = this.bankInfoList[0].accounts;
          this.subHeadsList = this.headsInfoList[0].subHeads;

          this.postReceipt.mainHeadId = this.headsInfoList[0].id;
          this.postReceipt.bankAccount = this.accountsList[0].bankAccount;
        }
      }
    );
  }

  getSubHeadInput(input: string, subHeadId: number) {
    for (let i = 0; i < this.subHeadsList.length; i++) {
      if (this.subHeadsList[i].id == subHeadId) {
        this.subHeadHashMap.set(this.subHeadsList[i].id.toString(), input);
      }
    }
  }

  submit() {
    let x:Object[] = [];
    this.postReceipt.userId = sessionStorage.getItem("userId");
    this.postReceipt.details = this.details;
    this.postReceipt.bankDateTime = this.date;

    for (let [key, value] of this.subHeadHashMap) {
      x.push({key, value});
    }
    
    this.postReceipt.formEntries = x
    console.log(this.postReceipt)
    if(this.postReceipt.userId == undefined || this.postReceipt.mainHeadId == undefined ||
       this.postReceipt.details == null || this.postReceipt.bankDateTime == null || this.postReceipt.bankAccount == null) {
        $("#emptyFeildsModal").modal("toggle");
    }else{
      this.dataService.postReceipt(this.postReceipt).subscribe(res => {
        $("#successModal").modal("toggle");
      })
    }
  }

  exportReceipt(){
    this.dataService.exportReceipt().subscribe(
      res => {
        var blob = new Blob([res],  { type: 'text/xlsx' });
        var filename = 'balance_sheet.xlsx';
        saveAs(blob, filename);
      }
    );
  }
}
