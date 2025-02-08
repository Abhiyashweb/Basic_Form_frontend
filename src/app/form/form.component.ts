import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import Swal from 'sweetalert2';  // Import SweetAlert2

@Component({
  selector: 'app-form',
  standalone: true, // Ensure it's a standalone component
  imports: [CommonModule, FormsModule], // Add FormsModule for ngModel support
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit { 
  user: User = new User();
  message: string = '';

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.addUser(this.user).subscribe(
      response => {
        this.message = response.message;
        this.user = new User(); // Reset form after successful submission
        
        // Success alert using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Data submitted successfully!',
          text: 'Your data has been saved.',
          confirmButtonText: 'OK'
        });
      },
      error => {
        this.message = 'Error submitting form!';
        
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There was an error submitting your data!',
          confirmButtonText: 'Retry'
        });
      }
    );
  }
}
