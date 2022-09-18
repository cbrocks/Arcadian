import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.component.html',
  styleUrls: ['./transactiondetail.component.css']
})
export class TransactiondetailComponent implements OnInit {

  transaction: any;
  
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Param: '+ id);

    this.getTransaction(id);
  }

  getTransaction(id: number): void {
    this.transactionService.getbyid(id).subscribe(d=>this.transaction=d);
  }
}