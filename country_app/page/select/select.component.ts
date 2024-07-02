import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, FormBuilder,Validators} from'@angular/forms'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  SelectedCountryId:any="";
  SelectedSateId:any="";
  SelectedCityId:any="";
  newArray:any=[];
  

  constructor() { }

  ngOnInit(): void {
  }

  public countries = [
 
    {
      id: 1,
      name: "India"
  },
  {
      id: 2,
      name: "Pakistan"
  },
  {
      id: 3,
      name: "Bangladesh"
  }
];
states = [
  {
      id: 1,
      country_id: 1,
      name: "WB"
  },
  {
      id: 2,
      country_id: 1,
      name: "MP"
  },
  {
      id: 3,
      country_id: 1,
      name: "AP"
  },
  {
      id: 4,
      country_id: 2,
      name: "Lahore"
  },
  {
      id: 5,
      country_id: 2,
      name: "Karachi"
  },
  {
      id: 6,
      country_id: 3,
      name: "Dhaka"
  },
  {
      id: 7,
      country_id: 3,
      name: "Chattagram"
  }
];

cities = [
  {
      id:1,
      state_id: 1,
      name: "kolkata"
  },
  {
      id:2,
      state_id: 1,
      name: "Howra"
  },
  {
      id:3,
      state_id: 4,
      name: "Saidpur"
  },
  {
      id:4,
      state_id: 4,
      name: "Johar Town"
  },
  {
      id:5,
      state_id: 6,
      name: "Tangail"
  },
  {
      id:6,
      state_id: 6,
      name: "Tarabo"
  }
]
submit(){
  if(this.SelectedCountryId){
for(let i=0;i<this.countries.length;i++){
     if(this.countries[i].id==this.SelectedCountryId){
     this.newArray.push(this.countries[i].name)
     }
    }
for(let j=0;j<this.states.length;j++){
      if(this.states[j].id==this.SelectedSateId){
        this.newArray.push(this.states[j].name)
      }
    }
for(let k=0;k<this.cities.length;k++){
      if(this.cities[k].id==this.SelectedCityId){
        this.newArray.push(this.cities[k].name)
      }
    }
console.log(this.newArray);
}
}
}


