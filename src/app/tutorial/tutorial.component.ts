import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  public isOnBasePage = true;
  private routeSubscription: Subscription;

  public chapters = [
    {
      link: "chapter1", title: "Chapter 1", sections: [
        { link: "section1", title: "Sample section" },
        { link: "section2", title: "Another sample" },
      ]
    },
    { link: "chapter2", title: "Chapter 2: Getting Started" },
    {
      link: "chapter3", title: "Chapter 3: Variables", sections: [
        { link: "section1", title: "Section 1" },
        { link: "section2", title: "Also a section" },
      ] },
    { link: "chapter4", title: "Chapter 4: Conditions and Branching" },
    { link: "chapter5", title: "Chapter 5: Loops" },
    { link: "chapter6", title: "Chapter 6: Beginning Graphics" },
    { link: "chapter7", title: "Chapter 7: Fun with Shapes" },
    { link: "chapter8", title: "Chapter 8: Turtle Graphics" },
    { link: "chapter9", title: "Chapter 9: Subroutines" },
    { link: "chapter10", title: "Chapter 10: Arrays" },
    { link: "chapter11", title: "Chapter 11: Events" },
    { link: "appendixA", title: "Appendix A: Fun Samples" },
    { link: "appendixB", title: "Appendix B: Colors" },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Listen to route changes to see if we're on the base page or not
    // Doing this on 
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOnBasePage = this.route.children.length == 0;
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
