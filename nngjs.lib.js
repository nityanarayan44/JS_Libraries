/**
 * @License: MIT 2017
 * @Created: 16-01-2018 [ 12:10:00Hrs IST]
 * @Author: Nitya Narayan Gautam [nityanarayan44]
 * @Description: JavaScript Lib for General JavaScript operations
 */

(function(window){

      // Set use ristrictions
      'use strict';

      // Global Instance
      // --- [Main Code Container] ---
      var nngjs = {

                  //--- [Global Vars Values] ---
                      highlightStyle : 'background-color: yellow; outline: 1px solid rgb(136, 255, 136);',
                      unHighlightStyle : '',

                      currentOngoingAjaxCallStatus : false,
                  /**
                   * =====================================
                   * [Utils] AJAX Interceptor
                   * =====================================
                   */
                      /* This will intercept any ajax call,
                         and whenever any ajax call is active
                         or complete it will update the ajaxCall var status.
                         :: Although, User needs to register/call this function once,
                         in order to Start intercepting AJAX.
                      */
                      interceptXHRCalls: function() {
                        let xhr = XMLHttpRequest.prototype.open;
                        // Insert the prototype method to monitor the ongoing ajax call.
                        XMLHttpRequest.prototype.open = function(){
                                this.currentOngoingAjaxCallStatus = true;
                                console.log('Any Currnet OnGoing AJAX Call ' + this.currentOngoingAjaxCallStatus);
                                this.addEventListener('load', function() {
                                    this.currentOngoingAjaxCallStatus = false;
                                    console.log('Any Currnet OnGoing AJAX Call ' + this.currentOngoingAjaxCallStatus);
                                    //will always be 4 (ajax is completed successfully)
                                    //console.log(this.readyState);
                                    //whatever the response was
                                    //console.log(this.responseText);
                                });
                                xhr.apply(this, arguments);
                        };
                      },
            
                  /*
                   *======================================
                   * [Page Scroll] General Operation
                   *======================================
                   */
                      // To Bottom of the page
                      scrollDownToBottom: function() {
                        window.scrollTo(0, document.body.scrollHeight);
                      },
                      // To Top of the page
                      scrollDownToTop: function() {
                        window.scrollTo(0, 0);
                      },
                      // Reload the Page
                      refreshPage: function(){
                        window.location.href = window.location.href;
                      },

                  /*
                   *======================================
                   * Finding of Target / Element by XPaths
                   *======================================
                   */

                   // Get Element with direct xpath
                   getElementWithXPath: function(xpath) {
                     return eval('$x("'+xpath+'")');
                   },
                    // Get the element that has exact string inside of it.
                    getElementThatHasString: function(txt) {
                      return eval('$x("//*[text()=\''+txt+'\']")');
                    },

                    // Get the element that just contains string inside of it.
                    getElementThatContainsString: function(txt) {
                      return eval('$x("//*[contains(text(), \''+txt+'\')]")');
                    },

                    // CSS Selector [Venilla]
                    getElementWithCssSelector: function(selector){
                      return $$(selector);
                    },

                  /*
                   *======================================
                   * Accessing the Target / Element Info
                   *======================================
                   */
                    getElementCountWithTag: function(tagName){
                      return window.document.getElementsByTagName(tagName).length;
                    },

                    // CSS Selector [Venilla]
                    getElementCountWithCssSelector: function(selector){
                      return $$(selector).length;
                    },
                    // CSS Selector [Adding . for class]
                    getElementCountWithClass: function(selector){
                      return $$('.'+selector).length;
                    },
                    // CSS Selector [Adding # for id]
                    getElementCountWithId: function(selector){
                      return $$('#'+selector).length;
                    },

                  /*
                   *======================================
                   * Operations on Targets / Elements
                   *======================================
                   */

                   // Click on first element, that matches with the criteria.
                   clickOnElementThatHasString: function(txt){
                     (this.getElementThatHasString(txt))[0].click();
                   },
                   clickOnElementThatContainsString: function(txt){
                     (this.getElementThatContainsString(txt))[0].click();
                   },
                   clickOnElementWithCssSelector: function(selector){
                     (this.getElementWithCssSelector(selector))[0].click();
                   },

                   // Click on nth element, that matches with the criteria.
                   clickOnElementThatHasString: function(txt, index){
                     (this.getElementThatHasString(txt))[index].click();
                   },
                   clickOnElementThatContainsString: function(txt, index){
                     (this.getElementThatContainsString(txt))[index].click();
                   },
                   clickOnElementWithCssSelector: function(selector, index){
                     (this.getElementWithCssSelector(selector))[index].click();
                   },

                   // Highlight the Element(s).
                   highlightElementWithCSSSelector: function(selector){
                     (this.getElementWithCssSelector(selector)).map(function(element){
                       element.setAttribute('style', nngjs.highlightStyle);
                     });
                   },
                   unHighlightElementWithCSSSelector: function(selector){
                     (this.getElementWithCssSelector(selector)).map(function(element){
                       element.setAttribute('style', nngjs.unHighlightStyle);
                     });
                   },
                   highlightElementWithXPath: function(xpath){
                     (this.getElementWithXPath(xpath)).map(function(element){
                       element.setAttribute('style', nngjs.highlightStyle);
                     });
                   },
                   unHighlightElementWithXPath: function(xpath){
                     (this.getElementWithXPath(xpath)).map(function(element){
                       element.setAttribute('style', nngjs.unHighlightStyle);
                     });
                   }

        };/*End_Of_nngjs code*/
        /*
         *=========================================================
         * [At Last]
         * We need that our library is globally accesible,
         * then we save in the window.
         *=========================================================
         */
        if(typeof(window.nngjs) === 'undefined'){
            window.nngjs = nngjs;
        }

})(window);
