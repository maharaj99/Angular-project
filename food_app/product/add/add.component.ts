import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, FormBuilder,Validators} from'@angular/forms'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

interface IFood {
  id:number,food_name:string,
  quantity:number,
  price:number
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  loginform!:FormGroup;
  constructor(private _fb:FormBuilder,private _router:Router,private _activatedroute:ActivatedRoute) { }
  old_data!: IFood;
  selectedData!:IFood;
  ngOnInit(): void {
    this.initForm();
    this.getEditDetails()
  }
 getEditDetails() {
    
    const name:number =Number(this._activatedroute.snapshot.params['id']);
    //console.log(name);
    if(name!==undefined) {
    let newdata:any=localStorage.getItem('item');
    newdata=JSON.parse(newdata)
     //console.log(newdata);
    if(newdata) {
      for(let i=0;i<newdata.length;i++){
        //console.log(newdata[i].id,name);
        if(newdata[i].id===name){
          this.selectedData = newdata[i]
        }
      }
    }
    console.log(this.selectedData);
    this.loginform.patchValue(this.selectedData);

    
 }
    else{
      console.log('the item dont find')
    }
    
  }
  initForm() {
    this.loginform = this._fb.group({
      id: new FormControl('',[Validators.required]),
      food_name: new FormControl('',[Validators.required]),
     quantity: new FormControl('',[Validators.required]),
     price: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    })

}
get id()
{
  return this.loginform.get('id');
}
get food_name()
{
  return this.loginform.get('food_name');
}
get quantity()
{
  return this.loginform.get('quantity');
}
get price()
{
  return this.loginform.get('price');
}
route() {
  this.loginform.markAllAsTouched();
    if (this.loginform.invalid) 
  {
      
      return;
  }

  var new_data = this.loginform.value;
//for update
  if(this.selectedData) 
  {
      //update
      const name:number =Number(this._activatedroute.snapshot.params['id']);
      let newdata:any=localStorage.getItem('item')
      newdata=JSON.parse(newdata)
     
      if(newdata){
        for(let i=0;i<newdata.length;i++){
          if(newdata[i].id===name){
            //var index = newdata.indexOf(newdata[i]);
            var replace=newdata.splice(i,1,this.loginform.value)
            //newdata.push(replace);
            localStorage.setItem('item',JSON.stringify(newdata))
          }
        }
      }
  } else 
  {
      // if add   
      // if LS have data
      if(localStorage.getItem('item')!==null) {
        //take the data from LS
          var oldArr:any = localStorage.getItem('item');
        //convert the data string to array
          oldArr = JSON.parse(oldArr);
        //add the new data with old data
          oldArr.push(new_data)
        //then send all data in LS converting array to string 
          localStorage.setItem('item',JSON.stringify(oldArr))

      //if ls have no data get null
        } else {
          let newArr = [];
      //add the data in a array 
          newArr.push(new_data);
      //send data in ls converting array to string
          localStorage.setItem('item',JSON.stringify(newArr))
          
        }
  }
 
  this._router.navigate(["/list"])
}

}
