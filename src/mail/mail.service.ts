import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import path from 'path';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(email: string, subject: string, text: string, html: string) {
    console.log(email);
    await this.mailerService.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      text,
      html,
    });
  }

  async sendMailForgotPassword(email: string, newPassword: string) {
    console.log(email);

    await this.sendMail(
      email,
      'Forgot password',
      `Your new password: ${newPassword}`,
      `<p>Your new password: ${newPassword}</p>`,
    );
  }
}
