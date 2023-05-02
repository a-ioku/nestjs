import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SampleService } from "./sample.service";

@Controller('sample')
@ApiTags('sample')
export class SampleController {
  public constructor(
    private readonly sampleService: SampleService,
  ) { }

  @Get('/get')
  public get(): string {
    return 'Nana Mizuki';
  }
}