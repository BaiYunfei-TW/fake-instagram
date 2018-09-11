import { Component, OnInit } from '@angular/core';
import subscribeList from '../../data/SubscribeList';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  subscribeList = [];

  constructor() {
    this.subscribeList = subscribeList;
  }

  ngOnInit() {
  }

}
