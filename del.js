 function repairLinks()
 {
   var linknodes = document.getElementsByClassName("link-title");
	 for( var i=0;i<linknodes.length;i++)
	 {
		 var link = linknodes[i].firstElementChild;
		 var newnode = "<a href=\""+link.dataset.trackOutbound+"\">"+link.text+"</a>";
		 linknodes[i].innerHTML = newnode;
		 linknodes[i].className = "link-title-modified";
	 }
 }
function DOMModifiedHandler(){
  $(this).unbind('DOMSubtreeModified');
    setTimeout(function(){
        repairLinks();
        $('#delicious').bind('DOMSubtreeModified',DOMModifiedHandler);
    },1000);
}

$('#delicious').bind('DOMSubtreeModified',DOMModifiedHandler);

