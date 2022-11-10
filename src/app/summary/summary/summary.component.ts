import { Component, OnInit } from '@angular/core';
import { Transactions, UserType } from 'src/app/constants';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  transactions: Transactions = { total: 0, data: [[]] };
  userType = UserType;

  constructor(private queryService: QueryService) {}

  ngOnInit(): void {
    this.queryService.getTransaction().subscribe(response => {
      this.transactions.total = response.total;
      this.transactions.data.splice(0, 1);
      UserType.forEach(elem => {
        this.transactions.data.push(
          response.data.filter(user => user.type === elem)
        );
      });
    });
  }
}
