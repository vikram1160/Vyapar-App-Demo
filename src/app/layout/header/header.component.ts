import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output() sidebarToggled = new EventEmitter<void>();
@Input() isCollapsed: boolean = false;

constructor(private router: Router,private route: ActivatedRoute) {}

   isSidebarVisible: boolean = false; 
   
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.isSidebarVisible = params['isSidebarVisible'] == 'false';
      console.log('Received:', this.isSidebarVisible);
    });
  }

onToggleSidebar() {
  this.sidebarToggled.emit();
}
  
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  navigateToNewComponent() {
    this.router.navigate(['/add-sale']);
  
  }
  navigateToAddPurchase(){
    this.router.navigate(['/add-purchase']);
  
  }

}
