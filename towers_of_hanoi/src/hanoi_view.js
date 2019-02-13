class HanoiView {

  constructor(game, $el) {
    this.game = game;
    this.numClicks = 0;
    this.firstPOS = null
    this.$el = $el;
    this.towers = this.setupTowers();
    this.bindEvents()
  }

  bindEvents() {
      this.$el.on('click', '#box', e => {
      const $s = $(e.target)
      this.numClicks++;
      if (this.numClicks == 2 && this.game.isValidMove()) {
        this.game.move(this.firstPOS, $s.data('num'));
        this.numClicks = 0;
        this.firstPOS = null
        this.render()
      } else {
        this.firstPOS = $s.data('num')
      }
    });
  }

  setupTowers() {
    for (let i = 0; i< 3; i++) {
      const $uls = $('<ul></ul>');
      $uls.attr('id', 'box')
      $uls.data('num', i);
      
      this.$el.append($uls);

      if (i === 0 ) {
        for (let i = 0; i < 3; i++) {
          const $li = $('<li></li>');
          $li.data('size', 3 - i);
          $uls.eq(0).append($li);
        }
      }
    }
  }

  render() {
    for (let i = 0; i < 3; i++) {
      const $uls = $('<ul></ul>');
      $uls.attr('id', 'box')
      $uls.data('num', i);
      this.$el.append($uls);

      const towers = this.game.towers;
      for(let j = 0; j < towers[i].length; j++ ) {
        const $li = $('<li></li>');
        $li.data('size', towers[i][j]);
        $uls.eq(0).append($li);

        let num = towers[i][j];
      }
    }
  }
}

module.exports = HanoiView;
