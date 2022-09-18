import { TransactiondetailComponent } from './transactiondetail/transactiondetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactioncreateComponent } from './transactioncreate/transactioncreate.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionComponent },
  { path: 'transactiondetail/:id', component: TransactiondetailComponent },
  { path: 'create', component: TransactioncreateComponent },
  { path: '', redirectTo: '/transactions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
