import { Test, TestingModule } from '@nestjs/testing';
import { DecksService } from './decks.service';
import { Sequelize } from 'sequelize-typescript';

describe('DecksService', () => {
  let service: DecksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DecksService,
        {
          provide: Sequelize,
          useValue: {
            addModels: jest.fn(),
            models: {
              Decks: {
                findAll: jest.fn().mockResolvedValue([]),
                create: jest.fn().mockResolvedValue({ toJSON: () => ({}) }),
              },
            },
          },
        },
      ],
    }).compile();

    service = module.get<DecksService>(DecksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
