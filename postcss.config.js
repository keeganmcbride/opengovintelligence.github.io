module.exports = {
  plugins: {
    'postcss-easy-import': {},
    'postcss-no-singleline-comment': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-css-variables': {},
    'postcss-compact-mq': {},
    'postcss-color-function': {},
    'postcss-calc': {
      selectors: true
    },
    'postcss-prefix-selector': {
      prefix: '.maquette-styled',
      transform: function(prefix, selector, prefixedSelector) {
        // "body a" => ".maquette-styled a"
        if (selector.substring(0, 4) === 'body') {
          return prefix + selector.slice(4);
        }
        // ".theme-x a" => ".theme-x a" NO CHANGE
        if (selector.substring(0, 7) === '.theme-') {
          return selector;
        }
        // "html *" => "html *" NO CHANGE
        if (selector.substring(0, 4) === 'html') {
          return selector;
        }
        return prefixedSelector;
      }
    },
    'autoprefixer': {},
    'postcss-discard-comments': {},
    'css-mqpacker':{},
    'postcss-combine-duplicated-selectors':{},
    'cssnano': {}
  }
}
