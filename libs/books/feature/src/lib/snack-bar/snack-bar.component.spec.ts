import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';
import { SnackBarComponent } from './snack-bar.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { BooksFeatureModule } from '../books-feature.module';

describe('ProductsListComponent', () => {
  let component: SnackBarComponent;
  let fixture: ComponentFixture<SnackBarComponent>;

  function mockFactory() {
    return {
      HubConnectionBuilder: () => {
        return {
          withUrl: (url) => {
            return {
              build: () => {}
            };
          }
        };
      }
    };
  }

  const MAT_SNACK_BAR_PROVIDER = [ { provide: MAT_SNACK_BAR_DATA, useFactory: mockFactory } ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule],
      providers: [ MAT_SNACK_BAR_PROVIDER ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});