'use strict';

/* eslint-env worker */
/* global LZString */

importScripts('js/lz-string.min.js');

// This script WON'T be parsed by JS engines because its MIME type is text/js-worker.
// or self.onmessage??/
self.onmessage = function(e) {
  postMessage(LZString.compressToBase64(e.data));
};
// Rest of your worker code goes here.