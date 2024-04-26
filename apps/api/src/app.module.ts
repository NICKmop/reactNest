import { Module } from '@nestjs/common';
import { TsModule } from './ts/ts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';


/**
 * MODULES SET
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    // TsModule, 
    AuthModule,
  ],
})

export class AppModule {}
