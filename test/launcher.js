// import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
// const win = doc.defaultView;
//
// global.document = doc;
// global.window = win;
//
// // add window properties to global to provide usage without 'window.' prefix
// Object.keys(window).forEach(key => {
//   if (!(key in global)) {
//     global[key] = window[key];
//   }
// });

chai.use(chaiImmutable);