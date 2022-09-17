import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStructure, User, UserType } from 'src/app/constants';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tabSet = UserType;
  data?: User[];
  defaultParam = '0';
  constructor(
    private queryService: QueryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(v => {
      const a = v as { tab: string };
      if (a.tab) this.defaultParam = a.tab;
      this.queryService
        .getTransaction()
        .subscribe(
          data =>
            (this.data = data.data.filter(
              user => user.type === this.tabSet[Number(this.defaultParam)]
            ))
        );
    });
  }

  getValueFunction(string: string) {
    return string;
  }
}
