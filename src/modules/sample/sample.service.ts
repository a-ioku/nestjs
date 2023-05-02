import { Injectable } from "@nestjs/common";

@Injectable()
export class SampleService {
  public getName(): string {
    return 'Nana Mizuki';
  }
}