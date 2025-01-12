import { Injectable, signal } from '@angular/core';
import { IUser } from './users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  currentUser=signal<IUser|undefined|null>(undefined)
  constructor(private router:Router) { }
  isAuthenticated(){
    let token =localStorage.getItem('token')
    
    console.log("isAuthenticated"+token)
    if (token){
      return true
    }
    else{
       this.router.navigate(['/'])
      return false}
  }
}
