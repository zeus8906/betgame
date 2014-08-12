$(document).ready(function(){
	$('.portal-content').accordion();
	
	$('.starting-modal').dialog({
		width: 450,
		modal: true,
		autoOpen: true,
		buttons: [{text:"Send All", click: function(){$('.starting-modal').dialog('close');}}, {text:"Later", click: function(){$('.starting-modal').dialog('close');}}],
		resizable: false,
		title: "Please enter the results of the following matches",
		closeText: "",
		open: function(event, ui) {
			$(".ui-dialog-titlebar-close").hide(); 
		}
	});
});