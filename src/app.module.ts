import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrossroadsModule } from './crossroads/crossroads.module';

@Module({
  imports: [CrossroadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
