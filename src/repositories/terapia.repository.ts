import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Terapia} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TerapiaRepository extends DefaultCrudRepository<
  Terapia,
  typeof Terapia.prototype.nombre
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Terapia, dataSource);
  }
}
