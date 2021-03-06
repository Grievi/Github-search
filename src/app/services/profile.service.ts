import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user/user';
import { Class } from '../repoList/repolist';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user!: User;
  repos!: Class;

  constructor(private http: HttpClient) {
    this.user = new User("", 0, 0, 0, "", "", "");
    this.repos = new Class("", "", "", "", new Date());
  }

  getProfile(username: string) {
    interface ApiResponse {
      name: string;
      login: string;
      url: string;
      avatar_url: string;
      followers: number;
      following: number;
      public_repos: number;
    }

    let userUrl = 'https://github.com/users' + username + '?client_id=' + environment.clientId + "&client_secret=" + environment.clientSecret;

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(userUrl).toPromise().then
        (response => {
          this.user = response;

          resolve()
        },
          error => {
            this.user.name = "Match not found, Please try again"

            reject(error)
          })
    })
    return promise;
  }

  getRepo(username: string) {
    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
      language: string;
      created_at: Date

    }
    let repoUrl = 'https://api.github.com/users/' + username + '?client_id=' + environment.clientId + "&client_secret=" + environment.clientSecret;

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(repoUrl).toPromise().then
        (response => {

          // console.log(response, "API response");
          
          this.repos = response;

          resolve()
        },
          error => {
            this.repos.name = "Match not found, Please try again"

            reject(error)
          })
    })
    return promise;

  }
}