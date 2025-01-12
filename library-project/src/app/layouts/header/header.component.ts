import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  login:any;
  registerdisably:any;
  logoutDisably:any
  searchId:any
  buy:any
  favorite:any
  constructor(private userServices:UserService,private router:Router){
   // this.loginDisable=true
    //this.registerDisable=true
    //this.logoutDisable=true
 
  }
  ngOnInit(): void {
    
    this.login=this.userServices.authenticated()
    if(this.login){
     console.log("hjkl"+this.login)
    this.registerdisably=false
    this.logoutDisably=true
    

  }
  else{
    this.registerdisably=true
    this.logoutDisably=false
    console.log("rregg"+this.registerdisably)
  }
  
 
    
  }
 
    home(){
      this.router.navigate(['/'])
  .then(() => {
    window.location.reload();
  });
     // this.router.navigate(["/"])
    }
  register(){  
        
    this.router.navigate(['register'])
    .then(() => {
      window.location.reload();
    });
  }
  logout(){
    console.log("logout")
    this.userServices.logout()
    
      
    
  }


}

