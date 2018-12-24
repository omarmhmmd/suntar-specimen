new Vue({
  el: "#container",
  data: {
    value: 170,
    dynamicFontSize: {
      fontSize: '170px'
    },
    letters: [{
        letter: 'a'
      },
      {
        letter: 'b'
      },
      {
        letter: 'c'
      },
      {
        letter: 'd'
      },
      {
        letter: 'e'
      },
      {
        letter: 'f'
      },
      {
        letter: 'g'
      },
      {
        letter: 'h'
      },
      {
        letter: 'i'
      },
      {
        letter: 'j'
      },
      {
        letter: 'k'
      },
      {
        letter: 'l'
      },
      {
        letter: 'm'
      },
      {
        letter: 'n'
      },
      {
        letter: 'o'
      },
      {
        letter: 'p'
      },
      {
        letter: 'q'
      },
      {
        letter: 'r'
      },
      {
        letter: 's'
      },
      {
        letter: 't'
      },
      {
        letter: 'u'
      },
      {
        letter: 'v'
      },
      {
        letter: 'w'
      },
      {
        letter: 'x'
      },
      {
        letter: 'y'
      },
      {
        letter: 'z'
      },
      {
        letter: '.'
      },
      {
        letter: '>'
      },
      {
        letter: '1'
      },
      {
        letter: '2'
      },
      {
        letter: '3'
      },
      {
        letter: '4'
      },
      {
        letter: '5'
      },
      {
        letter: '6'
      },
      {
        letter: '7'
      },
      {
        letter: '8'
      },
      {
        letter: '9'
      },
      {
        letter: '0'
      },
      // { letter: '' },
      // { letter: '' }
    ],
    mainLetter: 'a'
  },
  methods: {
    showLetter: function(letter) {
      // console.log(letter);
      this.mainLetter = letter;
    }
  },
  mounted() {

  },
  beforeMount() {

  },
  watch: {
    'value': function(val) {
      // console.log(val);
      this.dynamicFontSize.fontSize = val + 'px';
    }
  }
})
