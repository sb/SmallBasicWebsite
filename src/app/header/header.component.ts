import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    // The first link here is what the image logo will link to
    public links = [
        { name: "Home", route: "/" },
        { name: "Tutorials", route: "/tutorials" },
        { name: "Resources", route: "/resources" },
        { name: "FAQ", route: "/faq" },
        { name: "Contact", route: "/contact" },
    ];

  constructor() { }

  ngOnInit() {
  }

}
