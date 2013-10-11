function myWin() {
    var self = Ti.UI.createWindow({
        fullscreen : true, navBarHidden: false,
        title : 'Action Bar Buttons',
        color:'black',
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE 
    });
 // flex space
    var fs = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
     
    // tool view
    var toolView = Ti.UI.createView({
        left : '0dp',
        bottom : '0dp',
        width : '320dp',
        height : '40dp'
    });
     
    // text field
    var tf = Ti.UI.createTextField({
        top: '4dp',
        left: '4dp',
        width: '230dp',
        height: '32dp',
        font: { fontSize :'14dp'}, 
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardToolbar: [fs, toolView, fs], // this crashes iphone simulator when window is closed!
        keyboardToolbarColor: '#999',
        keyboardToolbarHeight: '40dp'
    });
     
    // send button
    var send = Ti.UI.createButton({
        top: '4dp',
        right: '4dp',
        width: '67dp',
        height: '32dp',
        title: 'Send'
    });
     
    // close win button
    var btn2 = Ti.UI.createButton({
        top: '50dp',
        width: '200dp',
        height: '35dp',
        title: 'Close Child Window'
    });
    btn2.addEventListener('click', function(e) {
        win.close();
    });
     
    // assemble
    toolView.add(tf);
    toolView.add(send);
    self.add(toolView);
    self.add(btn2);
  

    return self;
}

module.exports = myWin;
