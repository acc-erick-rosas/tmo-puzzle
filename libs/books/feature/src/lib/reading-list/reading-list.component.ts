import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, finishBook } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  finishBook(item) {
    const update: Update<ReadingListItem> = {
      id: item.bookId,
      changes: {
        finished: !(item.finished),
        finishedDate: !(item.finished) ? new Date().toISOString() : null
      }
    }
    this.store.dispatch(finishBook({ update }));
  }

  mapToStringDate(date) {
    date = new Date(date);
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  }
}
