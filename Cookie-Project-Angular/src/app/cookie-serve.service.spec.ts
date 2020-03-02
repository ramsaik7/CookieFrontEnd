import { TestBed } from '@angular/core/testing';

import { CookieServeService } from './cookie-serve.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

describe('CookieServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: CookieServeService = TestBed.get(CookieServeService);
    expect(service).toBeTruthy();
  });


});
