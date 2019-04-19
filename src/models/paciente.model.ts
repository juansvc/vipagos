import {Entity, model, property} from '@loopback/repository';

@model()
export class Paciente extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @property({
    type: 'number',
  })
  telefono?: number;

  @property({
    type: 'string',
  })
  correo?: string;

  @property({
    type: 'string',
  })
  detalle?: string;

  @property({
    type: 'string',
  })
  proximacita?: string;


  constructor(data?: Partial<Paciente>) {
    super(data);
  }
}
