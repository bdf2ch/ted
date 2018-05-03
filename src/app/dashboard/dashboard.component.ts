import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatDialog} from '@angular/material';
import {HourlyRateDialogComponent} from './components/hourly-rate-dialog/hourly-rate-dialog.component';
import {IDeveloper} from '../shared/interfaces/developer.interface';

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
  data: IDeveloper[] = [
    {
      name: 'Developer 1',
      hourlyRate: 10,
      hoursSpent: 14,
      costs: 0
    },
    {
      name: 'Developer 2',
      hourlyRate: 12,
      hoursSpent: 20,
      costs: 0
    },
    {
      name: 'Developer 3',
      hourlyRate: 8,
      hoursSpent: 32,
      costs: 0
    },
    {
      name: 'Developer 4',
      hourlyRate: 15,
      hoursSpent: 40,
      costs: 0
    }
  ]
  displayedColumns = ['name', 'hourlyRate', 'hoursSpent', 'costs'];
  selectedDeveloper: IDeveloper | null;


  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              breakpointObserver: BreakpointObserver,
              public dialog: MatDialog) {
    this.selectedDeveloper = null;

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


  openHourlyRateDialog(developer: IDeveloper) {
    this.selectedDeveloper = developer;
    this.dialog.open(HourlyRateDialogComponent, {
      width: '300px',
      data: {developer: developer}
    });
  }
}
