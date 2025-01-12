import { Component } from '@angular/core';
import { BookService } from '../../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { IComment } from '../../comments';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrl: './single-book.component.css',
})
export class SingleBookComponent {
  public book: any;
  public id: number;
  avg_rate: any;
  user_rate: any;
  comments: IComment[] = [];
  textAreaValue: any;
  message: any;
  backCol: any;
  signup: boolean = false;
  read: boolean = false;
  readOnline: boolean = false;
  buy: boolean = false;
  fav: boolean = false;
  purvalue: any;
  favvalue: any;

  constructor(
    private domSanitizer: DomSanitizer,
    private userService: UserService,
    private _bookServer: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.book = [];
    this.id = 0;
    this.textAreaValue = {
      comment: '',
    };
  }

  santizered(value: any) {
    console.log(value);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      'http://127.0.0.1:8000' + value
    );
  }
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    //console.log(this.id)
    this._bookServer.getBook(this.id).subscribe((data) => {
      (this.book = data), console.log('bookrate' + this.book.rate);

      if (localStorage.getItem('token')) {
        this._bookServer.checkFavoraite(this.id).subscribe((data) => {
          (this.favvalue = data), console.log('value' + this.favvalue);
          if (this.favvalue == true) {
            this.fav = false;
          } else {
            this.fav = true;
          }
        });
        this.signup = false;
        this.user_rate = this.book.rate;
        console.log(this.user_rate);
        if (this.book.price == 0) {
          this.read = true;
        } else {
          this._bookServer.checkPurches(this.id).subscribe((data) => {
            (this.purvalue = data), console.log('value' + this.purvalue);
            if (this.purvalue == true) {
              this.buy = false;
              this.read = true;
              //  this.readOnline=false
            } else {
              this.buy = true;
            }
          });
        }
      } else {
        this.fav = true;
        this.readOnline = true;
        if (this.book.price != 0) {
          this.buy = true;
          this.readOnline = false;
        }
      }
    });

    this._bookServer.getComments(this.id);
    this._bookServer.bookComment.subscribe((value) => {
      this.comments = value;

      console.log(this.comments);
    });
  }

  rate(rate: number, book_id: number) {
    if (!localStorage.getItem('token')) {
      localStorage.setItem('url', '/books/' + this.id);
      this.router.navigate(['/login']);
    }
    //console.log("data"+this.parentData.avg_rate)
    this._bookServer.addRate(rate, book_id).subscribe((data) => {
      this.user_rate = data;
      window.location.reload();

      console.log('avg_rate' + this.rate);
    });
  }

  addComment(content: any, id: number) {
    if (!localStorage.getItem('token')) {
      localStorage.setItem('url', '/books/' + this.id);
      this.router.navigate(['/register']);
    }
    console.log('id' + id);
    this._bookServer.postComment(id, content.comment).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });
  }
  favoraiteBook(id: number) {
    /**    if(!localStorage.getItem("token")){
    localStorage.setItem("url","/books/"+this.id)
   
   this.router.navigate(["/register"])}
   else{*/
    console.log(id);
    this._bookServer.setfavoraite(id).subscribe(
      (data) => {
        console.log(data);

        this.router.navigate(['books/favoraite']);
      },
      (error) => {
        if (error.status === 400) {
          if (error.error['mess']) {
            this.signup = false;
            this.message = error.error['mess'];
          }
          if (error.error['detail']) {
            this.signup = true;
            this.message = error.error['detail'];
          }
        }
      }
    );
    //}
  }

  buyBook(id: number) {
    /**    if(!localStorage.getItem("token")){
    localStorage.setItem("url","/books/"+this.id)
   
   this.router.navigate(["/register"])}
   else{*/
    this._bookServer.buyBook(id).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('buy', 'true');
        this.router.navigate(['books/purches']).then(() => {
          window.location.reload();
        });
      },
      (error) => {
        if (error.status === 400) {
          if (error.error['mess']) {
            this.signup = false;
            this.message = error.error['mess'];
          }
          if (error.error['detail']) {
            this.signup = true;
            localStorage.setItem('url', '/books/' + this.id);
            this.message = error.error['detail'];
          }
        }
      }
    );
    // }
  }
  readBook() {
    if (!localStorage.getItem('token')) {
      localStorage.setItem('url', '/books/' + this.id);

      this.router.navigate(['/register']);
    }
  }
  /*readBooks(price:number){
  if(price!=0){
    this.message="you have to buy it first"
  }
  else{
    if(!localStorage.getItem("token")){
      localStorage.setItem("url","/books/"+this.id)
     
     this.router.navigate(["/register"])}
  }
  
 
}*/
}
