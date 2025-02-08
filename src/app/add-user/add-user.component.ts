import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: User = new User();

  constructor(private userService: UserServiceService, public router: Router) {} 


  addUser() {
    this.userService.addUser(this.user).subscribe(response => {
      Swal.fire('Success!', 'User added successfully!', 'success');
      this.router.navigate(['/']);  // Navigate back to user list
    });
  }
}
