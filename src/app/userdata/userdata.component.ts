import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-userdata',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  users: User[] = [];
  message: string = '';  

  constructor(private userService: UserServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      error => {
        this.message = 'Error fetching users!';  // Set the message when error occurs
        console.error('Error fetching users', error);
      }
    );
  }

  addUser() {  
    this.router.navigate(['/add-user']);
  } 

  updateUser(userId: number) {
    this.router.navigate(['/update-user', userId]);
  }

  deleteUser(userId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(userId).subscribe(response => {
          Swal.fire('Deleted!', 'User has been deleted.', 'success');
          this.getUsers();
        });
      }
    });
  }
}
