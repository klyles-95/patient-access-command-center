import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  quote = "Loading your personal quote"
  username = "Getting your username"

  constructor(private user:UserService, private router: Router) { }

  ngOnInit() {
    this.user.getData().subscribe(data => {
    if(data.status) {
      this.quote = data.quote
      this.username = data.username
    } else {
      this.router.navigate(['logout'])
    }
    })
  }

}
