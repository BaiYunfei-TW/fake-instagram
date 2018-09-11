import { Component, OnInit } from '@angular/core';

import PhotoList from '../../../data/PhotoList';

@Component({
  selector: 'app-photo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  photoList = null;

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
}
