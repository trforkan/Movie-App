import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvItemBannerComponent } from './tv-item-banner.component';

describe('TvItemBannerComponent', () => {
  let component: TvItemBannerComponent;
  let fixture: ComponentFixture<TvItemBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvItemBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvItemBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
