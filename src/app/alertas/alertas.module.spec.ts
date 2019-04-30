import { AlertasModule } from './alertas.module';

describe('AlertasModule', () => {
  let alertasModule: AlertasModule;

  beforeEach(() => {
    alertasModule = new AlertasModule();
  });

  it('should create an instance', () => {
    expect(alertasModule).toBeTruthy();
  });
});
