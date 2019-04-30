import { SaludModule } from './salud.module';

describe('SaludModule', () => {
  let saludModule: SaludModule;

  beforeEach(() => {
    saludModule = new SaludModule();
  });

  it('should create an instance', () => {
    expect(saludModule).toBeTruthy();
  });
});
