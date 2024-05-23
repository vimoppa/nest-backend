import { Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MapperService extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      console.debug({ mapper });
      // createMap(mapper, FromThis, ToThat);
    };
  }
}
