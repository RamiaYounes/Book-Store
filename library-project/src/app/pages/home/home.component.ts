import { Component,OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { IBook } from '../../books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public  ratingBooks :any;
  public latestBooks:any;
  rating:IBook[]=[];
  searchId:any
  constructor(private _bookServer:BookService,private router:Router){
 

  }
  ngOnInit(): void {
    //rating books
  //this._bookServer.ratingBook()
  this._bookServer.ratingBook().subscribe(
    value=>{this.ratingBooks=value 
      this.rating=this.ratingBooks
      console.log(this.rating)
    });
 

    //latest books
    this._bookServer.latestBook().subscribe(
      value=>{this.latestBooks=value
    //this._bookServer.latest.subscribe(value=>{this.latestBooks=value
   })

  }
  bookDetail(id:number){
    console.log(id)
    this.router.navigate(["books",id])}

}
