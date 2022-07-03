import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowDataComponent } from './tv-show-data.component';

describe('TvShowDataComponent', () => {
  let component: TvShowDataComponent;
  let fixture: ComponentFixture<TvShowDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
