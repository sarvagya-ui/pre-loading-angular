import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadingnetworkComponent } from './preloadingnetwork.component';

describe('PreloadingnetworkComponent', () => {
  let component: PreloadingnetworkComponent;
  let fixture: ComponentFixture<PreloadingnetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloadingnetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadingnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
