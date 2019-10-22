import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormUpdateAddComponent } from './recipe-form-update-add.component';

describe('RecipeFormUpdateAddComponent', () => {
  let component: RecipeFormUpdateAddComponent;
  let fixture: ComponentFixture<RecipeFormUpdateAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFormUpdateAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormUpdateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
