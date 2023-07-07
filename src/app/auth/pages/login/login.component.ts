import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'panel-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);
  
    public loginForm: FormGroup = this.fb.group({
        email: [
            'xsrjowi@outlook.es', 
            [ 
                Validators.required, 
                Validators.email 
            ]
        ],
        password: [
            'jowi123', 
            [ 
                Validators.required, 
                Validators.minLength(6),
            ]
        ],
    });
  
    login() {
        const { email, password } = this.loginForm.value;
    
        this.authService.login(email, password)
            .subscribe({
                next: () => this.router.navigateByUrl('/dashboard'),
                error: (message) => {
                    Swal('Error', message, 'error' )
                }
            })
    }
}
