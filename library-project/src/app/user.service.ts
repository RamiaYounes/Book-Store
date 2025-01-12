import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from './users';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  tok:any;
  public user:any;
  constructor(private http:HttpClient,private router:Router) { 

   this.user={
    first_name:"",
    last_name:"",
    role:"",
    id:0,
    password:"",email:""
    }
  }
  login(userData:any){
   
   return this.http.post("http://127.0.0.1:8000/accounts/user/login",userData)}


customerRegister(userData:any){
    return this.http.post("http://127.0.0.1:8000/accounts/signUp/costomer",userData)}

authurRegister(userData:any){
  return  this.http.post("http://127.0.0.1:8000/accounts/signUp/author",userData)}

public logout() {
  let allData={"token":localStorage.getItem("token")}
  this.http.post("http://127.0.0.1:8000/accounts/logout",allData).subscribe(data=>{
    localStorage.removeItem('token')
    localStorage.removeItem('url')
    this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    })
   } )
  

}

public authenticated(){
  let token =localStorage.getItem('token')
  console.log("isAuthenticated"+token)
  console.log(token!='undefined')
  if (token!=null && token!='undefined'){
    return true
  }
  else{
    return false
  }
}
public sendMessage(data:any){
  let allData={"token":localStorage.getItem("token"),'mess':data}
  return  this.http.post("http://127.0.0.1:8000/message/add",allData)
  
}

}
