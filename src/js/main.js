'use strict';

import init from './init';

let vaScrollbar = {
  init: init,
  update: 'update'
};

if (typeof define === 'function' && define.amd) {
  define('va-scrollbar', [], function() {
    return vaScrollbar;
  });
} else {
  window.vaScrollbar = vaScrollbar;
}
