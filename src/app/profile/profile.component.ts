import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { User} from '../user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  user!:User;
  constructor( ProfileService:ProfileService, private http:HttpClient) { }

  ngOnInit(): void {
  }

}
