import { HistorialModule } from './historial.module';

describe('HistorialModule', () => {
  let historialModule: HistorialModule;

  beforeEach(() => {
    historialModule = new HistorialModule();
  });

  it('should create an instance', () => {
    expect(historialModule).toBeTruthy();
  });
});
