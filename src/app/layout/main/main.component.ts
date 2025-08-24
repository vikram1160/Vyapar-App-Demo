import { Component ,EventEmitter ,Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../sidebar/sidebar.service';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {

     sidebarCollapsed = false;

    isSidebarCollapsed = false;
  isCollapsed = false;

  constructor(private sidebarService: SidebarService) {
    sidebarService.isCollapsed$.subscribe((state) => {
      this.isCollapsed = state;
      
    });
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  }

