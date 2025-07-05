import { Test, TestingModule } from '@nestjs/testing';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

jest.mock('@nestjs-cognito/auth', () => ({
  Authentication: jest.fn(() => {
    return function (target: unknown) {
      return target;
    };
  }),
  CognitoUser: jest.fn(() => {
    return function () {
      return;
    };
  }),
}));

describe('TagsController', () => {
  let controller: TagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagsController],
      providers: [
        {
          provide: TagsService,
          useValue: {
            getAllTags: jest.fn(),
            createTag: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TagsController>(TagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
