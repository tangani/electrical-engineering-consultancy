import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.router.routerState.snapshot.toString());
  }

}
