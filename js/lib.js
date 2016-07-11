/* jshint esnext:true */
"use strict";
const $id = (id) => document.getElementById(id);
const $class = (cn) => document.getElementsByClassName(cn);
function to_char(el)
{
	if (!el)
		return;
	var text = el.textContent;
  var words = text.split(" ");
  if(words.length === 0)
    return;
  el.innerHTML = "";
  for (var w of words) {
    var w_el = document.createElement("span");
    w_el.className = "word";
    for(var l of w) {
  		var l_el = document.createElement("span");
      l_el.textContent = l;
      l_el.className = "letter";
      w_el.appendChild(l_el);
    }
    el.appendChild(w_el);
	}
}
