import { MatSelectModule } from '@angular/material/select';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCookieComponent } from './add-cookie.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatOption, MatOptionModule } from '../../../node_modules/@angular/material';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';


describe('AddCookieComponent', () => {
  let component: AddCookieComponent;
  let fixture: ComponentFixture<AddCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCookieComponent ],
      imports:[ReactiveFormsModule,MatIconModule,
       MatOptionModule,

       MatSelectModule,
        MatInputModule,HttpClientModule,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
