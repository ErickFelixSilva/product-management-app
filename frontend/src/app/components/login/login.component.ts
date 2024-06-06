import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {
	username: string = '';
	password: string = '';

	constructor(private http: HttpClient, private router: Router) { }

	login() {
		const headers = new HttpHeaders({
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		const body = `username=${this.username}&password=${this.password}`;

		this.http.post<any>('http://localhost:8080/login', body, { headers, withCredentials: true, observe: 'response' })
			.subscribe({
				next: () => {
					this.router.navigate(['/products']);
				},
				error: error => {
					console.error('Login failed', error);
				}
			});
	}
}
