import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})

export class SnackBarComponent {

  constructor(
    private readonly store: Store,
    private readonly _snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  onClick(actionRequested: any) {
    this.store.dispatch(actionRequested);
    this.dismissSnack();
  }

  dismissSnack() {
    this._snackBar.dismiss();
  }
}