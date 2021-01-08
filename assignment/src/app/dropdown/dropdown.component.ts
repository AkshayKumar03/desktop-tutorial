import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  public persondata:any;
 

  constructor(private myservice: MyserviceService, public router: Router) { }

  ngOnInit() {

    this.myservice.getData().subscribe((result:any) => {
      console.log(result.data);
       this.persondata = result.data;
      // console.log(this.persondata);

    });
  }

  getDetails(item) {
    console.log(item);
    this.router.navigate(['/detail']);
    // this.router.navigateByUrl('/detail', { state: {data: item}});
  }

}
