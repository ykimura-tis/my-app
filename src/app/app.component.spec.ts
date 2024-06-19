import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [],
      imports: []
    });
  });

  it(`titleプロパティに「my-app」という文字列が格納されているか`, () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.componentInstance;
    expect(component.title).toEqual('my-app');
  });
});