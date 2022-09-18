import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from './transaction.service';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactioncreateComponent } from './transactioncreate/transactioncreate.component';
import { TransactiondetailComponent } from './transactiondetail/transactiondetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactioncreateComponent,
    TransactiondetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
