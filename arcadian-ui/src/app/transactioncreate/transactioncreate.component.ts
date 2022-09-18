import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactioncreate',
  templateUrl: './transactioncreate.component.html',
  styleUrls: ['./transactioncreate.component.css']
})
export class TransactioncreateComponent {
  title = 'Transactions';

  constructor(
    private TransactionService: TransactionService,
    public router: Router 
    ){}

  data: any;
  TransactionForm!: FormGroup;
  submitted = false;

  ngOnInit(): void{
    this.TransactionForm = new FormGroup({
      transactionId: new FormControl(null),
      transactionName: new FormControl("", [Validators.required]),
      date: new  FormControl(new Date(), [Validators.required]),
      cost: new  FormControl("", [Validators.required])
    })
  }

  resetFrom()  
  {     
    this.TransactionForm.reset();  
    this.submitted = false;   
  }  

  onSubmit(formdata:any) {
    this.submitted = true;
    if(this.TransactionForm.invalid){
      return;
    }
    
    this.TransactionService.create(this.TransactionForm.value).subscribe(d=>{
      this.data=d;
      this.resetFrom();
    })

    this.get();
    this.router.navigate(['/transactions']); 
  }

  get(){
    this.TransactionService.get().subscribe(d=>this.data=d);
  }
}
