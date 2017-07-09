(function () {
  'use strict';
  Polymer({

    is: 'adom-card-color',

    properties: {
      heading: {
        type: String,
        value: 'title'
      },
      description: {
        type: String,
        value: null
      },
      color: {
        type: String,
        value: '#fff',
        observer: '_setColor'
      },
      icon: {
        type: String,
        value: null
      },
      counter: {
        type: Number,
        value: null
      },
      units: {
        type: String,
        value: null
      },
      ariaHeadingLevel: {
        type: String,
        value: "2",
        observer: '_headingLevel'
      },

    },
    /**
     * set the level and the role of the heading
     */
    _headingLevel: function () {
      var heading = this.$$('#heading');
      if (this.ariaHeadingLevel >= 1 && this.ariaHeadingLevel <= 6) {
        heading.setAttribute('role', 'heading');
        heading.setAttribute('aria-level', this.ariaHeadingLevel);
      } else {
        heading.removeAttribute('role');
        heading.removeAttribute('aria-level');
      }
    },
    _setColor: function() {
      this.customStyle['--adom-card-color-bg-color'] = this.color;
      this.updateStyles();
    }

  });
}());
