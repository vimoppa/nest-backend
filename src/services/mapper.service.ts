import { Injectable } from '@nestjs/common';
import { Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';

@Injectable()
export class MapperService extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      // createMap(mapper, FromThis, ToThat);
    };
  }
}
