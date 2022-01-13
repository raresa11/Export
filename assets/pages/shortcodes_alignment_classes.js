"use strict";

var shortcodes_alignment_classes = "\n<style>\n/* .shortcodes_alignment_classes */\nh3 {\n\tpadding-top: 0;\n}\nsection ol, section ul, section li {\n\tmargin: 0;\n}\n.uk-panel {\n\tborder: 1px solid #ddd;\n\tpadding: 40px;\n}\n.red {\n\tbackground: #fc4545;\n\tborder-radius: 2px;\n\tpadding: 0 4px;\n}\n.red > span {\n\tcolor: #fff !important;\n}\n.uk-tooltip {\n\tbackground: #007bff;\n}\n@media screen and (max-width: 767px){\n\timg {\n\t\twidth: 100%;\n\t}\n}\n</style>\n<div class=\"content shortcodes_alignment_classes\">\n\t<p class=\"uk-text-meta uk-margin-remove uk-flex uk-flex-middle\">Short Codes <span uk-icon=\"chevron-double-right\"></span></p>\n\t<h1>Alignment Classes</h1>\n\t<div class=\"uk-panel\">\n\t\t<p class=\"uk-text-left\">Left aligned text.</p>\n\t\t<p class=\"uk-text-center\">Center aligned text.</p>\n\t\t<p class=\"uk-text-right\">Right aligned text.</p>\n\t\t<p class=\"uk-text-justify\">Justified text.</p>\n\t\t<p class=\"uk-text-nowrap\">No wrap text.</p>\n\t</div>\n\t<h4>Explanation</h4>\n\t<ol>\n\t\t<li><p>To align images or other elements with spacing between the text and the element add one of these classes</p>\n\t\t\t<div class=\"uk-overflow-auto\">\n\t\t\t\t<table class=\"uk-table uk-table-small\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr><th>Class</th><th>Description</th></tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-align-left@m</code></td>\n\t\t\t\t\t\t\t<td>Floats the element to the left and creates right and bottom margin.</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-align-right@m</code></td>\n\t\t\t\t\t\t\t<td>Floats the element to the right and creates left and bottom margin.</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-align-center</code></td>\n\t\t\t\t\t\t\t<td>Centers the element and creates bottom margin.</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<pre class=\"prettyprint linenums\">&lt;img class=\"uk-align-left@m uk-margin-remove-adjacent\" src=\"assets/img/demo/11.jpg\" width=\"225\" height=\"150\" alt=\"Example image\"&gt;\n&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;\n&lt;p&gt;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/p&gt;\n\n&lt;img class=\"uk-align-right@m uk-margin-remove-adjacent\" src=\"assets/img/demo/11.jpg\" width=\"225\" height=\"150\" alt=\"Example image\"&gt;\n&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;\n&lt;p&gt;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/p&gt;</pre>\n\t\t\t<div class=\"uk-panel\">\n\t\t\t\t<img class=\"uk-align-left@m uk-margin-remove-adjacent\" src=\"assets/img/demo/11.jpg\" width=\"225\" height=\"150\" alt=\"Example image\">\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n\t\t\t\t<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n\n\t\t\t\t<img class=\"uk-align-right@m uk-margin-remove-adjacent\" src=\"assets/img/demo/11.jpg\" width=\"225\" height=\"150\" alt=\"Example image\">\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n\t\t\t\t<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n\n\t\t\t</div>\n\t\t\t<br>\n\t\t</li>\n\t\t<li><p>Add one of these useful classes to align your text</p>\n\t\t\t<div class=\"uk-overflow-auto\">\n\t\t\t\t<table class=\"uk-table uk-table-small\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr><th>Class</th><th>Description</th></tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-text-left</code></td>\n\t\t\t\t\t\t\t<td>Aligns text to the left.</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-text-right</code></td>\n\t\t\t\t\t\t\t<td>Aligns text to the right.</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-text-center</code></td>\n\t\t\t\t\t\t\t<td>Centers text horizontally.</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-text-justify</code></td>\n\t\t\t\t\t\t\t<td>Justifies text.</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-text-nowrap</code></td>\n\t\t\t\t\t\t\t<td>Prevents text from wrapping into multiple lines.</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<pre class=\"prettyprint linenums\">&lt;p class=\"uk-text-left\"&gt;Left aligned text.&lt;/p&gt;\n&lt;p class=\"uk-text-center\"&gt;Center aligned text.&lt;/p&gt;\n&lt;p class=\"uk-text-right\"&gt;Right aligned text.&lt;/p&gt;\n&lt;p class=\"uk-text-justify\"&gt;Justified text.&lt;/p&gt;\n&lt;p class=\"uk-text-nowrap\"&gt;No wrap text.&lt;/p&gt;</pre>\n\t\t\t<div class=\"uk-panel\">\n\t\t\t\t<p class=\"uk-text-left\">Left aligned text.</p>\n\t\t\t\t<p class=\"uk-text-center\">Center aligned text.</p>\n\t\t\t\t<p class=\"uk-text-right\">Right aligned text.</p>\n\t\t\t\t<p class=\"uk-text-justify\">Justified text.</p>\n\t\t\t\t<p class=\"uk-text-nowrap\">No wrap text.</p>\n\t\t\t</div>\n\t\t</li>\n\t</ol>\n\n</div>";