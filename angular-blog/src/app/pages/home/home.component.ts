import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  photoCover:string=""
  DcardTitle:string=""
  DcardDesc:string=""

  constructor(
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {    
  }

}
