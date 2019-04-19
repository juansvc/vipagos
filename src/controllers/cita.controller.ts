import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Cita} from '../models';
import {CitaRepository} from '../repositories';

export class CitaController {
  constructor(
    @repository(CitaRepository)
    public citaRepository : CitaRepository,
  ) {}

  @post('/citas', {
    responses: {
      '200': {
        description: 'Cita model instance',
        content: {'application/json': {schema: {'x-ts-type': Cita}}},
      },
    },
  })
  async create(@requestBody() cita: Cita): Promise<Cita> {
    return await this.citaRepository.create(cita);
  }

  @get('/citas/count', {
    responses: {
      '200': {
        description: 'Cita model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Cita)) where?: Where,
  ): Promise<Count> {
    return await this.citaRepository.count(where);
  }

  @get('/citas', {
    responses: {
      '200': {
        description: 'Array of Cita model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Cita}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Cita)) filter?: Filter,
  ): Promise<Cita[]> {
    return await this.citaRepository.find(filter);
  }

  @patch('/citas', {
    responses: {
      '200': {
        description: 'Cita PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() cita: Cita,
    @param.query.object('where', getWhereSchemaFor(Cita)) where?: Where,
  ): Promise<Count> {
    return await this.citaRepository.updateAll(cita, where);
  }

  @get('/citas/{id}', {
    responses: {
      '200': {
        description: 'Cita model instance',
        content: {'application/json': {schema: {'x-ts-type': Cita}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Cita> {
    return await this.citaRepository.findById(id);
  }

  @patch('/citas/{id}', {
    responses: {
      '204': {
        description: 'Cita PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() cita: Cita,
  ): Promise<void> {
    await this.citaRepository.updateById(id, cita);
  }

  @put('/citas/{id}', {
    responses: {
      '204': {
        description: 'Cita PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cita: Cita,
  ): Promise<void> {
    await this.citaRepository.replaceById(id, cita);
  }

  @del('/citas/{id}', {
    responses: {
      '204': {
        description: 'Cita DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.citaRepository.deleteById(id);
  }
}
