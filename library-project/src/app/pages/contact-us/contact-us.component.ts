import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

message:string="";
data:any;
mess:any;

constructor(private userService: UserService){
  this.data={
    content:'',
    subject:'',
   
  }
 
}

contact(){
  console.log(this.data)
  this.userService.sendMessage(this.data).subscribe(data=>{this.mess=data
    this.message=this.mess.message
    console.log(this.message)})


}
}
