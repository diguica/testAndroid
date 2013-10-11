function myWin() {
    //create module instance
    var self = Ti.UI.createTabGroup({
        fullscreen : true,
        navBarHidden: false,
        title : 'Action Bar Events',
        color:'black'
    });

    //create app tabs

    var win1 = Ti.UI.createWindow({
        title : 'win1'
    });

    win1.add(Ti.UI.createLabel({
        text : 'window 1'
    }));

    var tab1 = Ti.UI.createTab({
        title : 'tab1',
        window : win1
    });

    var win2 = Ti.UI.createWindow({
        title : 'win1'
    });

    win2.add(Ti.UI.createLabel({
        text : 'window 2'
    }));

    var tab2 = Ti.UI.createTab({
        title : 'tab2',
        window : win2
    });

    self.addTab(tab1);
    self.addTab(tab2);
	self.addEventListener('open', function(evt) {
		
		self.activity.onCreateOptionsMenu = function(e) {
			Ti.API.info("onCreateOptionsMenu");
			var menu = e.menu;
			
			// create Menu Items for all windows in the tabGroup
			var settingsItem = menu.add({
		    	icon : "images/ic_action_overflow.png",
		        title : 'settings',
		        showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW,
		        itemId: 1,
		        order: 1,
		        groupId :1
		    }),
		 
		    impressumItem = menu.add({
		        title : 'impressum',
		        icon : "images/ic_action_overflow.png",
		        showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW,
		        itemId: 2,
		        order: 2,
		        groupId :1
		    }),
		 
		    helpItem = menu.add({
		        title :'help',
		        icon : "images/ic_action_overflow.png",
		        showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW,//SHOW_AS_ACTION_NEVER,
		        itemId: 3,
		        order: 3,
		        groupId :1
		    }); 
			
			menu.setGroupVisible(1,true);
			// assign property to all windows in the tabGroup to access it inside the window
		};
	});
    return self;
}

module.exports = myWin;
