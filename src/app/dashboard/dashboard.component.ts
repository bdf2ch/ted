import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sideNavOpened: boolean;
  isHandset: boolean;
  isTabletLandscape: boolean;
  isDesktop: boolean;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        console.log('Desktop');
        this.isDesktop = true;
        this.isHandset = false;
        this.isTabletLandscape = false;
        this.sideNavOpened = true;
      }
    });


    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        console.log('Handset');
        this.isHandset = true;
        this.isTabletLandscape = false;
        this.isDesktop = false;
        this.sideNavOpened = false;
      }
    });


    breakpointObserver.observe([
      Breakpoints.TabletLandscape
    ]).subscribe(result => {
      if (result.matches) {
        console.log('Tablet Landscape');
        this.isHandset = false;
        this.isTabletLandscape = true;
        this.isDesktop = false;
        this.sideNavOpened = false;
      }
    });
  }

  ngOnInit() {}

  openSideBar() {
    this.sideNavOpened = true;
  }

  onCloseSideBar() {
    console.log('close side bar');
    this.sideNavOpened = false;
  }
}
