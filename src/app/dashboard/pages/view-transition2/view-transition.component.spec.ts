import { ComponentFixture, TestBed } from '@angular/core/testing';
import ViewTransition1Component from './view-transition1.component';


describe('ViewTransitionComponent', () => {
  let component: ViewTransition1Component;
  let fixture: ComponentFixture<ViewTransition1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransition1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTransition1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
