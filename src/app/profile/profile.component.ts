import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

import { User} from '../user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  user!:User;
  repos: any;

  constructor(public ProfileService:ProfileService){
    
  } 
  getUser(username:string){
    this.userService.getProfile(username).then((success)=>{
     this.user = this.userService.user;
    },
    // (error)=>{
    //   console.log(error)
    // });

    this.userService.getRepo(username).then((success)=>{
      this.repos = this.userService.repos;
     },
     (error)=>{
       console.log(error)
     });
   }

  ngOnInit(): void {
    this.getUser('Grievi');
  }

}
