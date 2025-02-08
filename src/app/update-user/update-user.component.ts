import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    public router: Router, 
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id')); 
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUsers().subscribe(users => {
      this.user = users.find(u => u.id === this.userId) || new User();
    });
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user).subscribe(_response => {
      Swal.fire('Updated!', 'User details updated successfully!', 'success');
      this.router.navigate(['/']); 
    });
  }
}
