import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {HistoriaClinica} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HistoriaClinicaRepository extends DefaultCrudRepository<
  HistoriaClinica,
  typeof HistoriaClinica.prototype._id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(HistoriaClinica, dataSource);
  }
}
