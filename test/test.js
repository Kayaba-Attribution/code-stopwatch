const { Timer } = require("../index");

describe("Timer", () => {
  let originalDateNow;

  beforeEach(() => {
    originalDateNow = Date.now;
    Date.now = jest.fn();
  });

  afterEach(() => {
    Date.now = originalDateNow;
  });

  test("tracks time between marks", () => {
    Date.now.mockReturnValueOnce(1000);
    const timer = new Timer("TestTimer", { silent: false });
    
    Date.now.mockReturnValueOnce(2000);
    timer.mark("Start");
    
    Date.now.mockReturnValueOnce(3000);
    const result = timer.mark("Step 1");
    
    expect(result.sinceLast).toBe(1.0);
    expect(result.sinceStart).toBe(2.0);
  });

  test("calculates total time", () => {
    Date.now.mockReturnValueOnce(1000);
    const timer = new Timer("TestTimer", { silent: false });
    
    Date.now.mockReturnValueOnce(2000);
    timer.mark("Start");
    
    Date.now.mockReturnValueOnce(3000);
    const total = timer.end();
    
    expect(total).toBe(2.0);
  });
});
