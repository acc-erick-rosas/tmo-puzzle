import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, undoRemoveFromReadingList } from '@tmo/books/data-access';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store, private readonly snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.snackBar.openFromComponent(
      SnackBarComponent,
      {
        data: {
          snackText: `You removed the book "${item.title}" from your Reading List`,
          actionRequested: undoRemoveFromReadingList({ item }),
          buttonText: 'Undo'
        },
        duration: 6000
      }
    );
  }
}
