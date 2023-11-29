import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.css']
})
export class SidebarmenuComponent implements OnInit {

  
  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "Dashboard",
      link: "#",
      img: "assets/images/dashboard-icon.png",
      icon: "bx bx-grid-alt",
      sub_menu: []
    },
    {
      link_name: "Explore",
      link: null,
      img: "assets/images/explore-icon.png",
      icon: "bx bx-grid-alt",
      sub_menu: []
    },
    {
      link_name: "Profile",
      link: null,
      img: "assets/images/profile-icon.png",
      icon: "bx bx-grid-alt",
      sub_menu: []
    },
    
   
    {
      link_name: "More",
      link: null,
      icon: "bx bx-collection",
      img: "assets/images/more-icon.png",
      sub_menu: [
        {
          link_name: "Setting's",
          link: "#",
        }, {
          link_name: "Help",
          link: "#",
        }, {
          link_name: "Logout",
          link: "#",
        }
      ]
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }

}
