import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public persondata = [];

  constructor(private activeRouter:ActivatedRoute,private myservice: MyserviceService) { }

  ngOnInit() {
    
    this.myservice.getData().subscribe((result:any) => {
      console.log(result.data);
       this.persondata = result.data;
      // console.log(this.persondata);

    });
  }
}
