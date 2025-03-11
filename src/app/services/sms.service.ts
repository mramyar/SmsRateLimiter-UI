import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private apiUrl = 'http://localhost:5000/api/sms'; 

  constructor(private http: HttpClient) {}

  // Check SMS limit
  checkSmsLimit(phoneNumber: string, accountId: string): Observable<{ canSend: boolean }> {
    return this.http.post<{ canSend: boolean }>(`${this.apiUrl}/check`, { phoneNumber, accountId });
  }

  // Fetch statistics
  getSmsStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats`);
  }
}
