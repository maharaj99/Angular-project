// import { Component } from '@angular/core';
// import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
 
 
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent  {
  
//   title = 'FormArray Example in Angular Reactive forms';
 
//   skillsForm: FormGroup;
 
//   constructor(private fb:FormBuilder) {
 
//     this.skillsForm = this.fb.group({
//       name: '',
//       skills: this.fb.array([]) ,
//     });
  
//   }
 
//   get skills() : FormArray {
//     return this.skillsForm.get("skills") as FormArray
//   }
 
//   newSkill(): FormGroup {
//     return this.fb.group({
//       Subject_name: '',
//       markes: '',
//     })
//   }
 
//   addSkills() {
//     this.skills.push(this.newSkill());
//   }
 
//   removeSkill(i:number) {
//     this.skills.removeAt(i);
//   }
 
//   onSubmit() {
//     console.log(this.skillsForm.value);
//   }
 
// }
import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']  
})  
export class AppComponent implements OnInit  {  
  title = 'formarray';  
  orderForm!: FormGroup;  
  items!: FormArray;  
  constructor(private formBuilder: FormBuilder) {}   
  ngOnInit() {  
    this.orderForm = new FormGroup({  
      itemss: new FormArray([])  
    });  
  }   
  createItem(): FormGroup {  
    return this.formBuilder.group({  
      name: '',  
      description: '',  
      price: ''  
    });  
  }   
  addItem(): void {  
    this.items = this.orderForm.get('itemss') as FormArray;  
    this.items.push(this.createItem());  
  }  


  removeItem(i:number) {
   this.items.removeAt(i);
  }
}   