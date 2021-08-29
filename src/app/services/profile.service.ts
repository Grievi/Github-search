import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private user: any;
  private username!: string;
  private _url = 'https://api.github.com/users';

  constructor(private http:HttpClient) {
    this.username = 'Grievi'
   }
}
