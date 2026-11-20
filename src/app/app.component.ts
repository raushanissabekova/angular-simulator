import { Component } from '@angular/core';
import { 
  sumNumbers, 
  uploadStatus, 
  textFormat, 
  IUser, 
  currentUser,
  AdminUser,
  adminUser,
  formatText,
  removeChar,
  users,
  filteredUsersByName,
 } from './training';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  status = uploadStatus;
  total: number = sumNumbers(5, 10);
  format = textFormat;
  user: IUser = currentUser;
  admin: AdminUser = adminUser;
  formattedText: string = formatText('привет мир', 'capitalize');
  cleanedText: string = removeChar('привет, мир!', ',');
  allUsers: IUser[] = users;
  selectedUsers: IUser[] = filteredUsersByName;
}