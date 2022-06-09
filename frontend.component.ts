import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants'

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {

  constructor() { }
  labels = Constants.AppConstants;

  ngOnInit(): void {
  }

  displayArr = Constants.AppConstants.cardDetails;

  buttonClicked(item: any){
    if(item.buttonText === "All"){
      this.displayArr = this.labels.cardDetails;
      return;
    }
    if(item.buttonText === "Latest Shows"){
      this.displayArr = this.labels.cardDetails.filter((element) => {
        return element?.latest == true;
      });
    }
    else{
      this.displayArr = this.labels.cardDetails.filter((element) => {
        return element?.likes>=20;
      });
    }
  }

}
