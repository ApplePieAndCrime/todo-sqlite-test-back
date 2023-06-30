import { MailService } from './mail.service';
import { MailController } from './mail.controller';

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
