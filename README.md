# Simple Execution Timer

Lightweight execution timer for Node.js with named steps. Track execution time between different parts of your code with minimal overhead.

## Install
```bash
npm install code-stopwatch
```

## Usage
```javascript
const { Timer } = require('simple-execution-timer');
// Create a new timer
const timer = new Timer('MyProcess');
// Mark different steps in your code
timer.mark('Step 1'); // Returns: { sinceLast: 1.2, sinceStart: 1.2 }
timer.mark('Step 2'); // Returns: { sinceLast: 0.5, sinceStart: 1.7 }
// End timing and get total duration
const total = timer.end(); // Returns total seconds elapsed
```

## Options
```javascript
const timer = new Timer('MyProcess', { silent: true }); // Disables console output
```
## API

### `new Timer(name, options?)`
- `name`: String identifier for the timer
- `options`: Configuration object
  - `silent`: Boolean (default: false) - Suppress console output

### `timer.mark(label)`
Marks a point in time and returns timing information
- Returns: `{ sinceLast: number, sinceStart: number }` (times in seconds)

### `timer.end()`
Stops the timer and returns total duration
- Returns: `number` (total seconds elapsed)


## License
MIT