const View = require('./ttt-view.js');// require appropriate file
const Game = require('./game.js');// require appropriate file

  $(() => {
    const game = new Game();
    const $rootEl = $('.ttt');
    const view = new View(game, $rootEl);
  });