import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {
  data2!: {user:string,email:string,number:number}
  constructor(){}
  ngOnInit(): void {
   this.getdata()

}
getdata(){
  let data1: any =localStorage.getItem('item');
  if(data1) {
//  console.log(JSON.parse(data1));
 this.data2 = JSON.parse(data1)
  }
 
  
  // return JSON.parse(data1);
}

}
