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
import {HistoriaClinica} from '../models';
import {HistoriaClinicaRepository} from '../repositories';

export class HistoriaClinicaController {
  constructor(
    @repository(HistoriaClinicaRepository)
    public historiaClinicaRepository : HistoriaClinicaRepository,
  ) {}

  @post('/historia-clinicas', {
    responses: {
      '200': {
        description: 'HistoriaClinica model instance',
        content: {'application/json': {schema: {'x-ts-type': HistoriaClinica}}},
      },
    },
  })
  async create(@requestBody() historiaClinica: HistoriaClinica): Promise<HistoriaClinica> {
    return await this.historiaClinicaRepository.create(historiaClinica);
  }

  @get('/historia-clinicas/count', {
    responses: {
      '200': {
        description: 'HistoriaClinica model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(HistoriaClinica)) where?: Where,
  ): Promise<Count> {
    return await this.historiaClinicaRepository.count(where);
  }

  @get('/historia-clinicas', {
    responses: {
      '200': {
        description: 'Array of HistoriaClinica model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': HistoriaClinica}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(HistoriaClinica)) filter?: Filter,
  ): Promise<HistoriaClinica[]> {
    return await this.historiaClinicaRepository.find(filter);
  }

  @patch('/historia-clinicas', {
    responses: {
      '200': {
        description: 'HistoriaClinica PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() historiaClinica: HistoriaClinica,
    @param.query.object('where', getWhereSchemaFor(HistoriaClinica)) where?: Where,
  ): Promise<Count> {
    return await this.historiaClinicaRepository.updateAll(historiaClinica, where);
  }

  @get('/historia-clinicas/{id}', {
    responses: {
      '200': {
        description: 'HistoriaClinica model instance',
        content: {'application/json': {schema: {'x-ts-type': HistoriaClinica}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<HistoriaClinica> {
    return await this.historiaClinicaRepository.findById(id);
  }

  @patch('/historia-clinicas/{id}', {
    responses: {
      '204': {
        description: 'HistoriaClinica PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() historiaClinica: HistoriaClinica,
  ): Promise<void> {
    await this.historiaClinicaRepository.updateById(id, historiaClinica);
  }

  @put('/historia-clinicas/{id}', {
    responses: {
      '204': {
        description: 'HistoriaClinica PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() historiaClinica: HistoriaClinica,
  ): Promise<void> {
    await this.historiaClinicaRepository.replaceById(id, historiaClinica);
  }

  @del('/historia-clinicas/{id}', {
    responses: {
      '204': {
        description: 'HistoriaClinica DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.historiaClinicaRepository.deleteById(id);
  }
}
