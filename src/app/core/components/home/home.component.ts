import { Component } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCollapsed=true;
  authUser : any;
  role: string;
  constructor(private tokenStorageService:TokenStorageService,private router: Router){
    console.log("home is rendered constructor");
    this.authUser = this.tokenStorageService.getUser();
    this.role = this.authUser.role;
  }

  ngOnInit(){
    console.log("home is rendered ngOnInit");
  }

  signOut(){
    this.tokenStorageService.signOut();
    this.router.navigate(['/accueil/login']);
  }
}
