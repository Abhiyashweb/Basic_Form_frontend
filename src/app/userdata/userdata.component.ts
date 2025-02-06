import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';  // Import the service
import { User } from '../models/user';  // Import the User model
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userdata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  users: User[] = [];  // Declare a variable to hold users
  message: string = '';

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.getUsers();  // Call the method to fetch users when the component initializes
  }

  // Fetch users from the API
  getUsers() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;  // Store the users in the component
      },
      error => {
        this.message = 'Error fetching users!';
        console.error(error);
      }
    );
  }
}
