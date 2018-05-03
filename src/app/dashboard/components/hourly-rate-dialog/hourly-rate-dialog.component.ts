import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hourly-rate-dialog',
  templateUrl: './hourly-rate-dialog.component.html',
  styleUrls: ['./hourly-rate-dialog.component.scss']
})
export class HourlyRateDialogComponent implements OnInit {
  public rate: FormControl = new FormControl('', Validators.required);

  constructor(private dialog: MatDialog,
              public dialogRef: MatDialogRef<HourlyRateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {}

  getRateErrorMessage() {
    return this.rate.hasError('required') ? 'You must enter hourly rate' : '';
  }


  saveRate() {
    this.dialogRef.close();
  }

}
