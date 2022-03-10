import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CounterComponent]
		})

		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;
		// fixture.debugElement
		// fixture.nativeElement
	})

	it('should create', () => {
		expect(component).toBeDefined();
	});

	it('should render counter property', () => {
		let num = 42;
		component.counter = num;

		fixture.detectChanges();

		let debug = fixture.debugElement.query(By.css('.counter'));
		let element: HTMLElement = debug.nativeElement;

		expect(element.textContent).toContain(num.toString());
	});
})
