/* jQuery jqEasyCharCounter plugin
 * Examples and documentation at: http://www.jqeasy.com/
 * Version: 1.0 (05/07/2010)
 * No license. Use it however you want. Just keep this notice included.
 * Requires: jQuery v1.3+
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
(function($) {

$.fn.extend({
    jqEasyCounter: function(givenOptions) {
        return this.each(function() {
            var $this = $(this),
                options = $.extend({
                    maxChars: 255,
					maxCharsWarning: 0.8,
					msgFontSize: '11px',
					msgFontColor: '#000',
					msgFontFamily: 'verdana, Geneva, Arial, Helvetica, sans-serif',
					msgTextAlign: 'right',
					msgWarningColor: '#F44',
					msgEndColor: '#F00',
					msgAppendMethod: 'insertAfter'
                }, givenOptions);
	
			if(options.maxChars <= 0 || options.maxCharsWarning < 0 || options.maxCharsWarning > 1 ) return;
			
			// create counter element
			var jqEasyCounterMsg;
			var jqEasyCounterMsgStyle = {
				'font-size' : options.msgFontSize,
				'font-family' : options.msgFontFamily,
				'color' : options.msgFontColor,
				'text-align' : options.msgTextAlign,
				'width' : $this.width(),
				'opacity' : 0
			};
			
			/* removido por imcompatibilidade com o chrome (ele conta fim de linha como 2 chars, 
			 * enquanto o jquery e demais navegadores conta como 1);
			 * colocar essa parte de volta quando padronizarem isso.
			var maxlength = $(this).attr('maxlength');
			
			if(maxlength){
				options.maxChars = maxlength;
			}
			*/
			
			if (options.msgAppendMethod == "insertAfter") {
				jqEasyCounterMsg = $(this).next();
			}
			else if (options.msgAppendMethod == "insertBefore") {
				jqEasyCounterMsg = $(this).prev()
			}
			else {
				return;
			}
			
			if(jqEasyCounterMsg == null || !$(jqEasyCounterMsg).hasClass('jqEasyCounterMsg')){
				jqEasyCounterMsg = $("<div class=\"jqEasyCounterMsg\">&nbsp;</div>")
				jqEasyCounterMsg[options.msgAppendMethod]($this);
				jqEasyCounterMsg.css(jqEasyCounterMsgStyle);
			}
			
			// bind events to this element
			$this
				.bind('keydown keyup keypress', doCount)
				.bind('focus paste', function(){setTimeout(doCount, 10);})
				.bind('blur', function(){jqEasyCounterMsg.stop().fadeTo( 'fast', 0);return false;});
			
			function doCount(){
				var val = $this.val(),
					length = val.length
				
				if(length >= options.maxChars) {
					val = val.substring(0, options.maxChars); 				
				};
				
				if(length > options.maxChars){
					// keep scroll bar position
					var originalScrollTopPosition = $this.scrollTop();
					$this.val(val.substring(0, options.maxChars));
					$this.scrollTop(originalScrollTopPosition);
				};
				
				if(length >= options.maxChars){
					jqEasyCounterMsg.css({"color" : options.msgEndColor});
					jqEasyCounterMsg.css({"font-weight" : "bold"});
				}
				else if(length >= options.maxChars * options.maxCharsWarning){
					jqEasyCounterMsg.css({"color" : options.msgWarningColor});
					jqEasyCounterMsg.css({"font-weight" : "normal"});
				}else {
					jqEasyCounterMsg.css({"color" : options.msgFontColor});
					jqEasyCounterMsg.css({"font-weight" : "normal"});
				};
				
				jqEasyCounterMsg.html('Caracteres: ' + $this.val().length + "/" + options.maxChars);
                jqEasyCounterMsg.stop().fadeTo( 'fast', 1);
			};
        });
    }
});

})(jQuery);