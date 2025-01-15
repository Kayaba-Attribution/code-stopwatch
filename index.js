class Timer {
  constructor(name = "Timer", options = {}) {
    this.name = name;
    this.startTime = Date.now();
    this.lastMark = this.startTime;
    this.silent = options.silent || false;
  }

  mark(label = "Step") {
    const now = Date.now();
    const sinceLast = (now - this.lastMark) / 1000;
    const sinceStart = (now - this.startTime) / 1000;

    if (!this.silent) {
      console.log(
        `[${this.name}] ${label}: +${sinceLast.toFixed(
          3
        )}s (total: ${sinceStart.toFixed(3)}s)`
      );
    }

    this.lastMark = now;
    return { sinceLast, sinceStart };
  }

  end() {
    const total = (Date.now() - this.startTime) / 1000;
    if (!this.silent) {
      console.log(`[${this.name}] Total time: ${total.toFixed(3)}s`);
    }
    return total;
  }
}

module.exports = { Timer };
