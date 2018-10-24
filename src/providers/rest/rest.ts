import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://randomuser.me/';
  public user:any[] = []; 

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }



  getUser() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/?results='+1).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUsers(number: Number) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/?results='+number).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
