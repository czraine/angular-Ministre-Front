import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {}
}
export interface Admin {
  id: number;
  email: string;
  password: string;
  role: string;
}
