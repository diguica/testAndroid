function myWin() {
	var win = Ti.UI.createWindow({
	backgroundColor : 'gray'
});

var btn = Ti.UI.createButton({
	title: 'Add Notification'
});

btn.addEventListener('click', function(e) {
	var toast = Ti.UI.createNotification({
    message:"Please Stand By",
    duration: Ti.UI.NOTIFICATION_DURATION_LONG
});
toast.show();
});

win.add(btn);
return win;
}

module.exports = myWin;
