import { Test, TestingModule } from '@nestjs/testing';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';

// Mock the Authentication decorator
jest.mock('@nestjs-cognito/auth', () => ({
  Authentication: jest.fn(() => {
    // Return a decorator function that does nothing
    return function (target: unknown) {
      return target;
    };
  }),
  CognitoUser: jest.fn(() => {
    // Return a parameter decorator that does nothing
    return function () {
      return;
    };
  }),
}));

describe('DecksController', () => {
  let controller: DecksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecksController],
      providers: [
        {
          provide: DecksService,
          useValue: {
            getDecksByUserId: jest.fn(),
            createDeck: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<DecksController>(DecksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
