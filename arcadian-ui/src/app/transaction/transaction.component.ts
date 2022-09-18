import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  title = 'Transactions';

  constructor(private TransactionService: TransactionService){}
  data: any;
  TransactionForm!: FormGroup;
  submitted = false;
  EventValue: any = "Save";  

  ngOnInit(): void{
    this.get();

    this.TransactionForm = new FormGroup({
      transactionId: new FormControl(null),
      transactionName: new FormControl("", [Validators.required]),
      date: new  FormControl("", [Validators.required]),
      cost: new  FormControl("", [Validators.required])
    })
  }

  get(){
    this.TransactionService.get().subscribe(d=>this.data=d);
  }

  resetFrom()  
  {     
    this.get();  
    this.TransactionForm.reset();  
    this.submitted = false;   
    this.EventValue = "Save"; 
  }  
}
