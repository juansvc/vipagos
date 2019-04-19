import {Entity, model, property} from '@loopback/repository';

@model()
export class HistoriaClinica extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'number',
  })
  edad?: number;

  @property({
    type: 'string',
  })
  peso?: string;

  @property({
    type: 'string',
  })
  talla?: string;

  @property({
    type: 'string',
  })
  imc?: string;

  @property({
    type: 'date',
  })
  fechaficha?: string;

  @property({
    type: 'string',
  })
  pacienteid?: string;

  @property({
    type: 'string',
  })
  sintoma?: string;


  constructor(data?: Partial<HistoriaClinica>) {
    super(data);
  }
}
