import {Entity, model, property} from '@loopback/repository';

@model()
export class Terapia extends Entity {
  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  _id: string;

  @property({
    type: 'string',
  })
  costo?: string;

  @property({
    type: 'string',
  })
  duracion?: string;


  constructor(data?: Partial<Terapia>) {
    super(data);
  }
}
