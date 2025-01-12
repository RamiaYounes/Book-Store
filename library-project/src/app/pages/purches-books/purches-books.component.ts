



import { Component } from '@angular/core';

import { BookService } from '../../book.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-purches-books',
  templateUrl: './purches-books.component.html',
  styleUrl: './purches-books.component.css'
})
export class PurchesBooksComponent {
  message:any;

  purchesBooks: any;
  searchId:any

  constructor(private bookService: BookService,private router:Router,private domSanitizer:DomSanitizer,private route:ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        let search= params.get('search')!;
        if(search){
        console.log(search);
        //console.log(params.get('search'));
        this.bookService.search(search,"purches").subscribe(data=>{console.log("data"+data)   
        this.purchesBooks=data})}
      
       
        else{
  this.bookService.getPurchesBooks().subscribe(
    data => {
    this.purchesBooks = data;
    console.log("pur"+this.purchesBooks)
  },
   (error)=>{
    if(error.status===400){
      if(error.error["message"] ){     
       this.message=error.error["message"] 
      }}
 
  })}
   

  
})
}
  santizered(value:any){
    console.log(value)
    return this.domSanitizer.bypassSecurityTrustResourceUrl("http://127.0.0.1:8000"+value);
  }

search(){
  this.router.navigate(['books/search',{search:this.searchId}])
}




}
