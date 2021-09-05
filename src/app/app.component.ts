import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { ServicesService } from './services.service';
​
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  errMessage: string | undefined;
  user: user = new user();
  userList: Array<user> = [];
​
​
constructor(private ServicesService: ServicesService) { }
​
ngOnInit() {
    this.ServicesService.GetRequest().subscribe((response: user[]) => {
      if(response) {
        this.userList = response;
      } else {
        this.errMessage = 'we are unable to retrieve users list.';
      }
    }, (error: any) => {
      this.errMessage = 'Http failure response for http://localhost:3000/users: 404 Not Found';
    });
}
}