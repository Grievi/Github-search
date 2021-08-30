import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchResult = new EventEmitter<any>()
  public userQuery!:string;

  constructor() { }

  getUser(){
    this.searchResult.emit(this.userQuery);
    console.log(this.searchResult);
    
  }

  ngOnInit(): void {

    
  }

}
