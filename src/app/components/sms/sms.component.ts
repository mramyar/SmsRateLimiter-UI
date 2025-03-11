import { Component, OnInit } from '@angular/core';
import { SmsService } from 'src/app/services/sms.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  phoneNumber: string = '';
  accountId: string = '';
  canSend: boolean | null = null;

  constructor(private smsService: SmsService) {}

  ngOnInit(): void {
  }

  checkSmsLimit() {
    if (!this.phoneNumber || !this.accountId) {
      alert('Please enter both phone number and account ID');
      return;
    }

    this.smsService.checkSmsLimit(this.phoneNumber, this.accountId).subscribe(response => {
      this.canSend = response.canSend;
    });
  }

}
