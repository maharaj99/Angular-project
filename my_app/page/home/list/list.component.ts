import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, FormBuilder,Validators} from'@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loginform!:FormGroup;
  constructor(private _fb:FormBuilder,private _router:Router) { }
  


  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.loginform = this._fb.group({
      user: new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required,Validators.email]),
     number: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    })
    
  }

  get user()
  {
    return this.loginform.get('user');
  }
  get email()
  {
    return this.loginform.get('email');
  }
  get number()
  {
    return this.loginform.get('number');
  }

  
  route() {
    if (this.loginform.invalid) {
        return;
    }
    let data=JSON.stringify(this.loginform.value)
    localStorage.setItem('item',data)

    this._router.navigate(["/list2"])
  }
  
}
