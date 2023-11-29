import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public exploringbutton = 'Start Exploring';
  public accountbutton = 'I already have an account!';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  title= "Embark on Your Personalised  Learning Adventure!";
  images = "assets/images/bannerimg.png";

  homeData=[{
    image:"assets/images/social.png",
    title: "Explore. Social. Play.",
    descriptions: "Embark on a quest, where personalised learning  meets evidence-based educational methodologies.   Our adventures, rooted in research, promote holistic  growth and understanding.",
    showFirst: true,
    divClass1: "home-section w-100 float-start", 
  },

  {
    image:"assets/images/fantasy.png",
    title: "Fueled by Experts",
    descriptions: "Explore Social Play is crafted with insight from  neurodiversity experts. Our quests nurture social  skills development and emotional intelligence,  guided by a panel of educational specialists.",
    showFirst: false,
    divClass1: "home-section w-100 float-start", 
  },

  {
    image:"assets/images/staychanted.png",
    title: "Stay Enchanted",
    descriptions: "At Explore Social Play you will be motivated with engaging missions, immediate feedback, and a supportive community keeping the spirit of a mindfulness adventure alive every step of the way.",
    showFirst: true,
    divClass1: "home-section w-100 float-start",
  },

  {
    image:"assets/images/learning.png",
    title: "Personalised Learning",
    descriptions: "Discover the joy of personalised learning at Explore  Social Play. Our adaptive educational platform, powered by artificial intelligence, crafts individualised  activities for every learner’s unique journey",
    showFirst: false,
    divClass1: "home-section w-100 float-start",
  },

  {
    image:"assets/images/adventure.png",
    title: "Adventures Anytime, Anyworld.",
    descriptions: "Discover the joy of personalised learning at Explore  Social Play. Our adaptive educational platform,   powered by artificial intelligence, crafts individualised  activities for every learner’s unique journey",
    showFirst: true,
    divClass1: "home-section w-100 float-start advntre-sect",
  },
]

public login():void{
  this.router.navigate(['/login']);
}
public register():void{
  this.router.navigate(['/register']);
  
}
}
