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
import {Terapia} from '../models';
import {TerapiaRepository} from '../repositories';

export class TerapiaController {
  constructor(
    @repository(TerapiaRepository)
    public terapiaRepository : TerapiaRepository,
  ) {}

  @post('/terapias', {
    responses: {
      '200': {
        description: 'Terapia model instance',
        content: {'application/json': {schema: {'x-ts-type': Terapia}}},
      },
    },
  })
  async create(@requestBody() terapia: Terapia): Promise<Terapia> {
    return await this.terapiaRepository.create(terapia);
  }

  @get('/terapias/count', {
    responses: {
      '200': {
        description: 'Terapia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Terapia)) where?: Where,
  ): Promise<Count> {
    return await this.terapiaRepository.count(where);
  }

  @get('/terapias', {
    responses: {
      '200': {
        description: 'Array of Terapia model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Terapia}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Terapia)) filter?: Filter,
  ): Promise<Terapia[]> {
    return await this.terapiaRepository.find(filter);
  }

  @patch('/terapias', {
    responses: {
      '200': {
        description: 'Terapia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() terapia: Terapia,
    @param.query.object('where', getWhereSchemaFor(Terapia)) where?: Where,
  ): Promise<Count> {
    return await this.terapiaRepository.updateAll(terapia, where);
  }

  @get('/terapias/{id}', {
    responses: {
      '200': {
        description: 'Terapia model instance',
        content: {'application/json': {schema: {'x-ts-type': Terapia}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Terapia> {
    return await this.terapiaRepository.findById(id);
  }

  @patch('/terapias/{id}', {
    responses: {
      '204': {
        description: 'Terapia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() terapia: Terapia,
  ): Promise<void> {
    await this.terapiaRepository.updateById(id, terapia);
  }

  @put('/terapias/{id}', {
    responses: {
      '204': {
        description: 'Terapia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() terapia: Terapia,
  ): Promise<void> {
    await this.terapiaRepository.replaceById(id, terapia);
  }

  @del('/terapias/{id}', {
    responses: {
      '204': {
        description: 'Terapia DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.terapiaRepository.deleteById(id);
  }
}
