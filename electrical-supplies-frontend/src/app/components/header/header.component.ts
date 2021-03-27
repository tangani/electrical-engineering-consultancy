import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router) {
    // console.log(this.router.url);
  }

  // this.router.url === '/login'

  ngOnInit(): void {
    // console.log(this.router.routerState.snapshot.toString());
    // console.log(this.activatedRoute.url);
  }

}
