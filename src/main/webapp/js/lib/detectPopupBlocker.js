function detectPopupBlocker() {
		var test = window.open(null,"","width=100,height=100");
		try {
				test.close();
				alert("�˾� ���� ����");
		} catch (e) {
				alert("�˾� ���� ����");
		}
}

// Created by: Simon Willison
// http://simon.incutio.com/archive/2004/05/26/addLoadEvent
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(detectPopupBlocker);
