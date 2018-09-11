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

}
