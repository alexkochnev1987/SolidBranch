import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { User, UserType } from 'src/app/constants';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tabSet = UserType;
  defaultParam = '0';
  data?: Observable<User[]>;
  constructor(
    private queryService: QueryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.data = this.route.queryParams.pipe(
      switchMap(route =>
        this.queryService
          .getTransaction()
          .pipe(
            map(v =>
              v.data.filter(
                user => user.type === this.tabSet[Number(route['tab'])]
              )
            )
          )
      )
    );
  }
}
