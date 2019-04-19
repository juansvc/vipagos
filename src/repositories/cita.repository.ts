import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Cita} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CitaRepository extends DefaultCrudRepository<
  Cita,
  typeof Cita.prototype._id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Cita, dataSource);
  }
}
