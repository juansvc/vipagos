import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Paciente} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype._id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Paciente, dataSource);
  }
}
