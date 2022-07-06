import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPostComponent } from './read-post.component';

describe('ReadPostComponent', () => {
  let component: ReadPostComponent;
  let fixture: ComponentFixture<ReadPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
