import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountpageComponent } from './accountpage.component';

describe('AccountpageComponent', () => {
  let component: AccountpageComponent;
  let fixture: ComponentFixture<AccountpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
