
function myWin() {
    var self = Ti.UI.createWindow({
        fullscreen : true,
        navBarHidden: false,
        title : 'Holo Style Dialog',
        color:'black'
    });
    var dialog = Titanium.UI.createOptionDialog({ top: '20dp', 
    	left:'5dp',
    	right:'5dp',
        options:['Create New File', 'Browse Existing Files', 'Cancel'],
        title:'Please Choose a File'
    });
    
    self.addEventListener('open', function () {
	   dialog.show();
	});
  
    
 // Creating two checkBoxes
    var check1 = Titanium.UI.createSwitch({
     
        title:'recieve alert when taking new photos',
        width: Titanium.UI.FILL,
        height:'20dp',
        top:'40dp',
        style: Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,
        textAlign:'left',
        color:'black',
        font:{fontSize:'18dp', fontWeight:'bold'}
     
    });
     
    var check2 = Titanium.UI.createSwitch({
     
        title:"verify inheritor's email information randomly",
        top:'100dp',
        height:'20dp',
        width: Titanium.UI.FILL,
        style: Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,
        textAlign:'left',
        color:'black',
        font: {fontSize: '18dp', fontWeight: 'bold'}    
     
    });
    
    var check3 = Titanium.UI.createSwitch({
        title:'BLA',
        height:'20dp',
        top:'140dp',
         textAlign:'left',
        color:'black',
        font:{fontSize:'18dp', fontWeight:'bold'}
     
    });
    
    self.add(check2);
    self.add(check1);
    self.add(check3);
    self.add(dialog);
    
    
    
    return self;
}

module.exports = myWin;
