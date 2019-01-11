import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterHopitalComponent } from './ajouter-hopital.component';

describe('AjouterHopitalComponent', () => {
  let component: AjouterHopitalComponent;
  let fixture: ComponentFixture<AjouterHopitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterHopitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
