import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsMunicipalyComponent } from './institutions-municipaly.component';

describe('InstitutionsMunicipalyComponent', () => {
  let component: InstitutionsMunicipalyComponent;
  let fixture: ComponentFixture<InstitutionsMunicipalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionsMunicipalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionsMunicipalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
