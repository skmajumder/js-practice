'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔄 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔄 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔄 Substitution'],
  [72, '🔄 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

// *** Task 1
console.log('---- Task 1 ----');

const events = [...new Set(gameEvents.values())];
console.log(events);

// *** Task 2
console.log('---- Task 2 ----');

gameEvents.delete(64);
console.log(gameEvents);

// *** Task 3
console.log('---- Task 3 ----');

const time = [...gameEvents.keys()].pop();
const averageEvent = time / gameEvents.size;
console.log(`An event happened, on average, every ${averageEvent} minutes`);

// *** Task 4
console.log('---- Task 4 ----');

for (const [minutes, event] of gameEvents) {
  const half = minutes <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minutes}: ${event}`);

  //   if (minutes <= 45) {
  //     console.log(`[FIRST HALF] ${minutes}: ${event}`);
  //   } else if (minutes <= 90) {
  //     console.log(`[SECOND HALF] ${minutes}: ${event}`);
  //   } else {
  //     console.log(`[EXTRA TIME] ${minutes}: ${event}`);
  //   }
}
