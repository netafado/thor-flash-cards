import { Test, TestingModule } from '@nestjs/testing';
import { CardsController } from './cards.controller';

import { CardService } from './cards.service';
import { CreateCardDto } from './dto/create-card-dto';
import { CreateCardResponseDto } from './dto/create-card-dto';

// Mock the Authentication decorator
jest.mock('@nestjs-cognito/auth', () => ({
  Authentication: jest.fn(() => {
    return function (target: unknown) {
      return target;
    };
  }),
}));

describe('CardsController', () => {
  let controller: CardsController;
  let cardService: CardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardsController],
      providers: [
        {
          provide: CardService,
          useValue: {
            getAllCards: jest.fn(),
            createCard: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CardsController>(CardsController);
    cardService = module.get<CardService>(CardService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cards', async () => {
      const deckId = 'test-deck-id';
      const result: CreateCardResponseDto[] = [];
      jest.spyOn(cardService, 'getAllCards').mockResolvedValue(result);

      expect(await controller.findAll(deckId)).toBe(result);
    });
  });

  describe('createCard', () => {
    it('should create a card and return it', async () => {
      const createCardDto: CreateCardDto = {
        deckId: 'test-deck-id',
        name: 'Test Question',
        front: 'Test Answer',
        back: 'Test Back',
        dificulty: 'EASY',
      };
      const result: CreateCardResponseDto = {
        id: 1,
        ...createCardDto,
        deck_id: '',
        created_at: new Date(),
        updated_at: new Date(),
      };
      jest.spyOn(cardService, 'createCard').mockResolvedValue(result);

      expect(await controller.createCard(createCardDto)).toBe(result);
    });
  });
});
