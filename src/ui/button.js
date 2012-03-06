define(['exports'], function (button) {

  button.view = Backbone.View.extend({

    'events': {
      'click': 'onClick'
    }

    ,'initialize': function (opts) {
      _.extend(this, opts);
      this.delegateEvents();
    }

    ,'onClick': function () {}

  });

});
