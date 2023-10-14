import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  
  photoCover:string=""
  contentTitle:string=""
  contentDesc:string=""
  contentRev:string=""
  reviewState:boolean=false
  private id:string|null="0"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
        this.id=value.get("id")
      )

      this.setValues(this.id)
  }

  setValues(id:string|null){
    const result=dataFake.filter(article=>article.id.toString()==id)[0]

    this.contentTitle=result.title
    this.contentDesc=result.description
    this.photoCover=result.photoCover
    if(result.review=="n")
    {
      this.contentRev="Nao Recomendo"
      this.reviewState=false
    }
    if(result.review=="y")
    {
      this.contentRev="Recomendo"
      this.reviewState=true
    }

  }

}
