import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocharactersComponent } from './infocharacters.component';

describe('InfocharactersComponent', () => {
  let component: InfocharactersComponent;
  let fixture: ComponentFixture<InfocharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
