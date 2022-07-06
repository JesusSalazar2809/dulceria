import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
	selector: 'kt-register',
	templateUrl: './register.component.html',
	encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
	registerForm: object | undefined;

	constructor(
		private router: Router,
		private service: RegisterService,
		private cdr: ChangeDetectorRef
	) { }

	ngOnInit() {

	}

	submit() {
		//Here must be the petition
	}
}
