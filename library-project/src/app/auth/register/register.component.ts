import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { IUser } from '../../users';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public user: IUser;
  message:any
  constructor(private _userServer:UserService, private router :Router) {
    this.user={
      first_name:"",
      last_name:"",
      role:"",
      id:0,
      password:"",email:""
      }
   }

  public register(){
    console.log(this.user.role)
    if(this.user.role=="AUTHOR"){
      this._userServer.authurRegister(this.user).subscribe(
        (data) => {
          this.router.navigate(['/login'])
        },
        (error)=>{
          if(error.status===400){
            console.log(error.error["detail"])
            window.scrollTo(0, 0)
           this.message=error.error["detail"]
           
        }}
        )
      }
    
    else if(this.user.role=="CUSTOMER"){
      this._userServer.customerRegister(this.user).subscribe(
        (data) => {
          this.router.navigate(['/login'])
        },
        (error)=>{
          if(error.status===400){
            console.log(error.error["detail"])
            window.scrollTo(0, 0)
           this.message=error.error["detail"]
           
        }}
        )
      }
    

  }

}
