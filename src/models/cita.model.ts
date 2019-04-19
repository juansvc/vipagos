import {Entity, model, property} from '@loopback/repository';

@model()
export class Cita extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  _id: string;

  @property({
    type: 'string',
  })
  estado?: string;

  @property({
    type: 'date',
  })
  fecha?: string;

  @property({
    type: 'string',
  })
  receta?: string;

  @property({
    type: 'string',
  })
  terapia?: string;


  constructor(data?: Partial<Cita>) {
    super(data);
  }
}
