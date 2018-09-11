import { Component, OnInit } from '@angular/core';

import PhotoList from '../../../data/PhotoList';
import userInfo from '../../../data/UserInfo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  photoList = null;
  comment = '';

  constructor() {
    this.photoList = PhotoList;
  }

  ngOnInit() {
  }

  upPhoto(photo) {
    if (photo.up) {
      photo.up = false;
      photo.upQuantity--;
      return;
    }
    photo.up = true;
    photo.upQuantity++;
  }

  markPhoto(photo) {
    photo.marked = !photo.marked;
  }

  submitComment(photo) {
    photo.comments.push({
      nickName: userInfo.nickName,
      content: this.comment
    });
    this.comment = '';
    return false;
  }
}
