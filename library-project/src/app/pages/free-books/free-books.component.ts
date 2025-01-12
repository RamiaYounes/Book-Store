import { Component } from '@angular/core';
import { IBook } from '../../books';
import { BookService } from '../../book.service';
import {  Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-free-books',
  templateUrl: './free-books.component.html',
  styleUrl: './free-books.component.css'
})
export class FreeBooksComponent {
  public books :IBook[] ;
  public curentUser:any;
  searchId:any
  constructor(private _bookServer:BookService,private router:Router,private route:ActivatedRoute)
  {
    this.books = [];  
  }

ngOnInit(): void { 
  this.route.paramMap.subscribe(
    (params: ParamMap) => {
      let search= params.get('search')!;
      if(search){
      console.log(search);
      //console.log(params.get('search'));
      this._bookServer.search(search,"free").subscribe(data=>{console.log("data"+data)   
      this.books=data})}
    
     
      else{
  localStorage.setItem('url',"/books/free")
  console.log(this.router.url)
   this._bookServer.getFreeBooks().subscribe(
     (data)=>{  this.books=data
       console.log(this.books)
        })}}); 
}

}
