import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrossroadsModule } from './crossroads/crossroads.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CrossroadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
