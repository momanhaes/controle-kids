import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriancasListComponent } from './criancas-list.component';

describe('CriancasListComponent', () => {
  let component: CriancasListComponent;
  let fixture: ComponentFixture<CriancasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriancasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriancasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
