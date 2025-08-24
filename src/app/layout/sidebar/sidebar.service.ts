import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
 private collapsed = new BehaviorSubject<boolean>(false);
  isCollapsed$ = this.collapsed.asObservable();

  toggle(): void {
    this.collapsed.next(!this.collapsed.value);
  }

  getState(): boolean {
    return this.collapsed.value;
  }
}
