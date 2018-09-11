import { Component, OnInit } from '@angular/core';
import subscribeList from '../../data/SubscribeList';
import userInfo from '../../data/UserInfo';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  subscribeList = [];
  userInfo = null;

  constructor() {
    this.subscribeList = subscribeList;
    this.userInfo = userInfo;
  }

  ngOnInit() {
  }

}
