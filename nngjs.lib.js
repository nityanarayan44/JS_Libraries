/**
 * @License: MIT 2017
 * @Created: 16-01-2018 [ 12:10:00Hrs IST]
 * @Author: Nitya Narayan Gautam [nityanarayan44]
 * @Description: JavaScript Lib for General JavaScript operations
 */

// Set use ristrictions
use "strict";

// Global Instance
var nngjs = {

  // [Page Scroll] General Operation
      scrollDownToBottom: function() {
        window.scrollTo(0,document.body.scrollHeight);
      },
      scrollDownToTop: function() {
        window.scrollTo(0,0);
      }

  //
};
