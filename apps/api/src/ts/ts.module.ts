import { Module } from "@nestjs/common";
import { TsController } from "./ts.controller";
import { TsService } from "./ts.service";

@Module({
    controllers: [TsController],
    providers: [TsService],
})

export class TsModule {}