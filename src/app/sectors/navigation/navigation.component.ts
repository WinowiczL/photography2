import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.sekcja) {
        document.getElementById(params.sekcja).scrollIntoView({
          behavior: 'auto'
        });
      }
    });
  }

  scrollToElement(element: string) {
    document.getElementById(element).scrollIntoView({behavior: 'smooth'});
    this.router.navigate(['/'], {
      queryParams: {
        sekcja: element
      }
    });
  }

}
