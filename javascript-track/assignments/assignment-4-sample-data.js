/**
 * Sample data for Relationship Status below:
 */
const social_graph = {
  "@bongolpoc": { firstName: "Joselito", lastName: "Olpoc", following: [] },
  "@joaquin": {
    firstName: "Joaquin",
    lastName: "Gonzales",
    following: ["@chums", "@jobenilagan"],
  },
  "@chums": {
    firstName: "Matthew",
    lastName: "Uy",
    following: ["@bongolpoc", "@miketan", "@rudyang", "@joeilagan"],
  },
  "@jobenilagan": {
    firstName: "Joben",
    lastName: "Ilagan",
    following: ["@eeebeee", "@joeilagan", "@chums", "@joaquin"],
  },
  "@joeilagan": {
    firstName: "Joe",
    lastName: "Ilagan",
    following: ["@eeebeee", "@jobenilagan", "@chums"],
  },
  "@eeebeee": {
    firstName: "Elizabeth",
    lastName: "Ilagan",
    following: ["@jobenilagan", "@joeilagan"],
  },
};

/**
 * Sample data for Tic Tac Toe below:
 */
const board1 = [
  ["X", "X", "O"],
  ["O", "X", "O"],
  ["O", "", "X"],
];

const board2 = [
  ["X", "X", "O"],
  ["O", "X", "O"],
  ["", "O", "X"],
];

const board3 = [
  ["O", "X", "O"],
  ["", "O", "X"],
  ["X", "X", "O"],
];

const board4 = [
  ["X", "X", "X"],
  ["O", "X", "O"],
  ["O", "", "O"],
];

const board5 = [
  ["X", "X", "O"],
  ["O", "X", "O"],
  ["X", "", "O"],
];

const board6 = [
  ["X", "X", "O"],
  ["O", "X", "O"],
  ["X", "", ""],
];

/**
 * Sample data for ETA below:
 */

const legs = {
  upd: {
    nextStop: "admu",
    travelTimeMins: 10,
  },
  admu: {
    nextStop: "dlsu",
    travelTimeMins: 35,
  },
  dlsu: {
    nextStop: "upd",
    travelTimeMins: 55,
  },
};
