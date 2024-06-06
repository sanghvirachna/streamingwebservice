import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesandshowsComponent } from './moviesandshows.component';

describe('MoviesandshowsComponent', () => {
  let component: MoviesandshowsComponent;
  let fixture: ComponentFixture<MoviesandshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesandshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesandshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
