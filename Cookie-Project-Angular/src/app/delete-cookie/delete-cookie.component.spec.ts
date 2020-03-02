import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCookieComponent } from './delete-cookie.component';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

describe('DeleteCookieComponent', () => {
  let component: DeleteCookieComponent;
  let fixture: ComponentFixture<DeleteCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCookieComponent,
      
      ],
      imports:[

        ReactiveFormsModule,
        HttpClientModule


      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
