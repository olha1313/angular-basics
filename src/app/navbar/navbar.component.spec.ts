import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
let component: NavbarComponent;
let fixture: ComponentFixture<NavbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavbarComponent],
			imports: [RouterTestingModule]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have link to posts page', () => {
		let debug = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
		let index = debug.findIndex(e => e.attributes['href'] === '/posts')

		expect(index).toBeGreaterThan(-1);
	});
});
