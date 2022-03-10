import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RoutingComponent } from './routing.component';
import { Subject } from 'rxjs';

class RouterStub {
	public navigate(path: string[]) {}
}

class ActivatedRouteStub {
	private subject = new Subject<Params>();

	public push(params: Params): void {
		this.subject.next(params);
	}

	get params() {
		return this.subject.asObservable();
	}

	// public params!: Observable<Params>;
}

describe('RoutingComponent', () => {
	let component: RoutingComponent;
	let fixture: ComponentFixture<RoutingComponent>;

	beforeEach( () => {
		TestBed.configureTestingModule({
			declarations: [RoutingComponent],
			imports: [RouterTestingModule],
			providers: [
				{ provide: Router, useClass: RouterStub },
				{ provide: ActivatedRoute, useClass: ActivatedRouteStub },
			],
			schemas: [NO_ERRORS_SCHEMA]
		})

		fixture = TestBed.createComponent(RoutingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should navigate to posts if go back', () => {
		let router = TestBed.get(Router);
		let spy = spyOn(router, 'navigate');

		component.goBack();

		expect(spy).toHaveBeenCalledWith(['/posts'])
	});

	it('should redirect to 404 page if id = 0', () => {
		let router = TestBed.get(Router);
		let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
		let spy = spyOn(router, 'navigate');

		route.push({ id: 0 });

		expect(spy).toHaveBeenCalledWith(['/404']);
	});

	it('should have router-outlet directive', () => {
		let debug = fixture.debugElement.query(By.directive(RouterOutlet));

		expect(debug).not.toBeNull();
	});
});
