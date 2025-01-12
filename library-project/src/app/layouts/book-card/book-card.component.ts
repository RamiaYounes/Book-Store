import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
@Input() public parentData:any;

public bookId:number;
rating:any;
constructor(private router:Router ){
  this.bookId=0;
  //this.rating=0;
  
}
ngOnInit(): void {
 
  if(this.parentData){
  this.rating=this.parentData.avg_rate
console.log(this.parentData.avg_rate)}

  }

bookDetail(id:number){
  console.log(id)
  this.router.navigate(["books",id])}
 

}



