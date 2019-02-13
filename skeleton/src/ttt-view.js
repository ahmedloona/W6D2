class View {
  constructor(game, $el) {
    this.$el = $el
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', '#square', e => {
      console.log("hello");
      const $s = $(e.target)
      this.game.playMove($s.data('pos'));
      this.makeMove($s)
    });
  }

  makeMove($square) {
    $square.css('background', 'white');
    $square.text(this.game.currentPlayer)
    $square.addClass(this.game.currentPlayer)
    if (this.game.isOver()) {
      alert('This player wins! ' + this.game.winner())
    }
  }

  setupBoard() {
    const $grid = $('<ul></ul>');

    this.$el.append($grid)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $square = $('<li></li>');
        $square.data('pos', [i,j]);
        $square.attr('id', 'square')
        $grid.append($square)
      }
    }
  }
}

module.exports = View;
