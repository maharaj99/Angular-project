import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  food!: {id:number,food_name:string,quantity:number,price:number}[]
  


  constructor(private _router:Router,) { }

  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    if(localStorage.getItem('item')) {
    let data1: any =(localStorage.getItem('item'));
   

   this.food = JSON.parse(data1)
    }
  }
  route(param:string,id:number) {
    this._router.navigate([param+'/'+id])
  }


}
