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
import {Paciente} from '../models';
import {PacienteRepository} from '../repositories';

export class PacienteController {
  constructor(
    @repository(PacienteRepository)
    public pacienteRepository : PacienteRepository,
  ) {}

  @post('/pacientes', {
    responses: {
      '200': {
        description: 'Paciente model instance',
        content: {'application/json': {schema: {'x-ts-type': Paciente}}},
      },
    },
  })
  async create(@requestBody() paciente: Paciente): Promise<Paciente> {
    return await this.pacienteRepository.create(paciente);
  }

  @get('/pacientes/count', {
    responses: {
      '200': {
        description: 'Paciente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Paciente)) where?: Where,
  ): Promise<Count> {
    return await this.pacienteRepository.count(where);
  }

  @get('/pacientes', {
    responses: {
      '200': {
        description: 'Array of Paciente model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Paciente}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Paciente)) filter?: Filter,
  ): Promise<Paciente[]> {
    return await this.pacienteRepository.find(filter);
  }

  @patch('/pacientes', {
    responses: {
      '200': {
        description: 'Paciente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() paciente: Paciente,
    @param.query.object('where', getWhereSchemaFor(Paciente)) where?: Where,
  ): Promise<Count> {
    return await this.pacienteRepository.updateAll(paciente, where);
  }

  @get('/pacientes/{id}', {
    responses: {
      '200': {
        description: 'Paciente model instance',
        content: {'application/json': {schema: {'x-ts-type': Paciente}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Paciente> {
    return await this.pacienteRepository.findById(id);
  }

  @patch('/pacientes/{id}', {
    responses: {
      '204': {
        description: 'Paciente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() paciente: Paciente,
  ): Promise<void> {
    await this.pacienteRepository.updateById(id, paciente);
  }

  @put('/pacientes/{id}', {
    responses: {
      '204': {
        description: 'Paciente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() paciente: Paciente,
  ): Promise<void> {
    await this.pacienteRepository.replaceById(id, paciente);
  }

  @del('/pacientes/{id}', {
    responses: {
      '204': {
        description: 'Paciente DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pacienteRepository.deleteById(id);
  }
}
