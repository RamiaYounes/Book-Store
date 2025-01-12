import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../../book.service';

import { AuthService } from '../../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent implements OnInit {
  

   //public books :IBook[] ;
   public books :any ;
   searchId:any
   book:any;
   public curentUser:any;
   latest:boolean=false
   latestBook:any

   
constructor(private _bookServer:BookService,private router:Router,private route:ActivatedRoute){
  this.books = [];  
}
ngOnInit(): void {

      this.route.paramMap.subscribe(
        (params: ParamMap) => {
          let search= params.get('search')!;
          if(search){
          console.log(search);
          //console.log(params.get('search'));
          this._bookServer.search(search,"all").subscribe(data=>{console.log("data"+data)   
          this.books=data})}
        
         
          else{
            this._bookServer.getAllBooks().subscribe(
              (data)=>{  this.books=data
                console.log(this.books)
          })
          
        }
      })
  }




}