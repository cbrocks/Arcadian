import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from './transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  trxgeturl = 'https://localhost:44377/api/transaction/get';
  trxgidurl = 'https://localhost:44377/api/transaction/getbyid?id=';
  trxaddurl = 'https://localhost:44377/api/transaction/create';

  constructor(private http: HttpClient) { }  
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    

  get(){  
    return this.http.get(this.trxgeturl);  
  } 

  getbyid(id: number){  
    const url = `${this.trxgidurl}${id}`;  
    this.http.get<Transaction>(url).subscribe(r=>console.log(r)); 
    return this.http.get<Transaction>(url);  
  }  

  create(formdata: any){
    return this.http.post(this.trxaddurl, formdata);
  }
}
