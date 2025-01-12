import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { IBook } from './books';
import { Router } from '@angular/router';
import { IComment } from './comments';

@Injectable({
  providedIn: 'root'
})
export class BookService {
     //rate of a book
   private rate:number=0
   //comments
  public comment:any;
  private userComment = new BehaviorSubject<IComment []>([]);
  public bookComment = this.userComment.asObservable();
  headers: HttpHeaders | undefined;
 
  constructor(private http:HttpClient) { 
    
  }

setfavoraite(bookId: number) {
    let allData={"book":bookId,"token":localStorage.getItem("token")}
    console.log(allData)
    return this.http.post("http://127.0.0.1:8000/books/add/favorite",allData)
  }
getAllBooks():Observable<IBook []>{    
    return this.http.get<IBook []>("http://127.0.0.1:8000/books/all")    
}
getBook(id:number){

  let allData={"token":localStorage.getItem("token")}
  console.log(allData)
  return this.http.post("http://127.0.0.1:8000/books/"+id,allData) 
}
getFavoraiteBooks(){
  let allData={"token":localStorage.getItem("token")}
  return this.http.post<IBook []>("http://127.0.0.1:8000/books/favorite",allData) 
}
getPurchesBooks(){
let allData={"token":localStorage.getItem("token")}
  console.log(allData)
  return this.http.post("http://127.0.0.1:8000/books/purches",allData) 
}
getFreeBooks(){
  return this.http.get<IBook []>("http://127.0.0.1:8000/books/free") 
}
buyBook(book_id:number){
  let allData={"token":localStorage.getItem("token")}
  console.log(allData)
  return this.http.post("http://127.0.0.1:8000/cards/buy/"+book_id,allData)

}
addRate(rate:number,book_id:number){
  let allData={"book_id":book_id,"token":localStorage.getItem("token"),"rate":rate}
  console.log(allData)
  return this.http.post("http://127.0.0.1:8000/books/add/rate",allData)
  }


ratingBook(){
 
return this.http.get("http://127.0.0.1:8000/books/rating")
}

latestBook(){

  return this.http.get("http://127.0.0.1:8000/books/latest")
 
 
 }
 getComments(id:number){
  let allData={"book_id":id}
   this.http.post<Observable<IComment[]>>("http://127.0.0.1:8000/comments/all",allData).subscribe(value=>{this.comment=value
   console.log("comment"+this.comment )
   this.userComment.next(this.comment)
  })

  }
 
 postComment(id:number,content:string){
  let allData={"token":localStorage.getItem("token"),"book_id":id,"content":content}
  return this.http.post("http://127.0.0.1:8000/comments/add",allData) 
 }
 search(searchData:any,choice:any){
  let allData={"search":searchData,"choice":choice,"token":localStorage.getItem("token")}
  return this.http.post<IBook []>("http://127.0.0.1:8000/books/search",allData)
 }

 checkPurches(id:number){
  let allData={"token":localStorage.getItem("token"),"book":id}
  return this.http.post("http://127.0.0.1:8000/books/check/purches",allData) 
}
checkFavoraite(id:number){
  let allData={"token":localStorage.getItem("token"),"book":id}
  return this.http.post("http://127.0.0.1:8000/books/check/favoraite",allData) 
}

}