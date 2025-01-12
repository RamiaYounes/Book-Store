import { Component } from '@angular/core';
import { IBook } from '../../books';
import { BookService } from '../../book.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-favoraite-books',
  templateUrl: './favoraite-books.component.html',
  styleUrl: './favoraite-books.component.css'
})
export class FavoraiteBooksComponent {
  favoraiteBooks: IBook[]=[];
  searchId:any;
  message:any;

  constructor(private bookService: BookService,private router:Router,private route:ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        let search= params.get('search')!;
        if(search){
        console.log("search"+search);
        //console.log(params.get('search'));
        this.bookService.search(search,"favoraite").subscribe(data=>{console.log("data"+data)   
        this.favoraiteBooks=data})}
      
       
        else{

          this.bookService.getFavoraiteBooks().subscribe(data => {
            this.favoraiteBooks = data;
            console.log(this.favoraiteBooks)
          },
          (error)=>{
            if(error.status===400){
              if(error.error["message"] ){     
               this.message=error.error["message"] 
              }}
         
          }
          )
          ;}}
    )
}

search(){
  this.router.navigate(['books/search',{search:this.searchId}])
}




}
