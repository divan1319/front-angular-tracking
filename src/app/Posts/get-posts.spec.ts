import { TestBed } from '@angular/core/testing';

import { GetPosts } from './get-posts';

describe('GetPosts', () => {
  let service: GetPosts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPosts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
