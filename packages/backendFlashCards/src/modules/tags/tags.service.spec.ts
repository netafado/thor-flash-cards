import { Test, TestingModule } from '@nestjs/testing';
import { TagsService } from './tags.service';
import { Sequelize } from 'sequelize-typescript';

jest.mock('sequelize-typescript', () => {
  return {
    Sequelize: jest.fn().mockImplementation(() => ({
      addModels: jest.fn(),
    })),
  };
});
describe('TagsService', () => {
  let service: TagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TagsService,
        {
          provide: Sequelize,
          useValue: {
            addModels: jest.fn(),
            models: {
              Tag: {
                findAll: jest.fn().mockResolvedValue([]),
                create: jest.fn().mockResolvedValue({ toJSON: () => ({}) }),
              },
            },
          },
        },
      ],
    }).compile();

    service = module.get<TagsService>(TagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
