//#region @browser
import { Component, Input, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { User } from '../../shared/user';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.container.html',
  styleUrls: ['./admin-users.container.scss']
})
export class AdminUsersContainer implements OnInit {

  User = User;
  users$ = this.User.ctrl.getAll().received.observable.pipe(map(data => {
    return data.body.json;
  }))

  myId: number;

  @Input({
    required: false
  })
  set id(v: string) {
    this.myId = Number(v);
  }

  constructor() {

  }

  async ngOnInit() {
    await this.User.ctrl.getSpecyficThings().received;
  }

}
//#endregion
