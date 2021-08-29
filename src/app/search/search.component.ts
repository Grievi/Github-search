import { EventEmitter } from 'stream';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output searchUser()=new EventEmitter<any>();
  public userQuery!:string;

  constructor() { }

  searchUser(){
    this.searchResult.emit(this.userQuery);
  }

  ngOnInit(): void {
  }

}
