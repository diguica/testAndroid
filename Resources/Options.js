function myWin() {
    var self = Ti.UI.createWindow({
        fullscreen : true,
        title : 'Action Bar Events',
        navBarHidden: false,color:'black'
    });

    /*self.addEventListener('open', function() {
     if (Ti.Platform.osname === "android") {
     var actionBar = self.getActivity().actionBar;
     if (actionBar) {
     actionBar.backgroundImage = 'images/actionbar_background_tile.png';
     actionBar.title = 'Title bar Changed'
     actionBar.displayHomeAsUp = true;
     // add a handler for home icon clicks
     actionBar.onHomeIconItemSelected = function(e) {
     alert("Action Bar Icon Clicked!");
     };
     }
     }
     });*/

    var table = Ti.UI.createTableView({
        data : [{
            title : 'Title',
            color: 'orange',font: {fontFamily: 'Aller', fontSize: '20dp', fontWeight : 'bold'},
            key : 'title',
            value : 'Title bar Changed'
        }, {
            title : 'Bachground',
            key : 'backgroundImage',
            color: 'orange',font: {fontFamily: 'Aller', fontSize: '20dp', fontWeight : 'bold'},
            value : 'images/actionbar_background_tile.png'
        }, {
            title : 'Add icon event',
            key : 'onHomeIconItemSelected',
            color: 'orange',font: {fontFamily: 'Aller', fontSize: '20dp', fontWeight : 'bold'},
            value : function(e) {
                alert("Action Bar Icon Clicked!");
            }
        }, {
            title : 'displayHomeAsUp',
            key : 'displayHomeAsUp',
            color: 'orange',font: {fontFamily: 'Aller', fontSize: '20dp', fontWeight : 'bold'},
            value : true
        }, {
            title : 'Icon',
            key : 'icon',
            color: 'orange',font: {fontFamily: 'Aller', fontSize: '20dp', fontWeight : 'bold'},
            value : 'images/Nefertiti.png'
        }, {
            title : 'Logo',
            key : 'logo',
            color: 'orange',font: {fontFamily: 'Aller', fontSize: '20dp', fontWeight : 'bold'},
            value : 'images/Pyramid.png'
        }, {
            title : 'Hide',
            color: 'orange',font: {fontFamily: 'Aller', fontSize: '20dp', fontWeight : 'bold'},
            key : 'hide'
        }, {
            title : 'Show',
            color: 'orange',font: {fontFamily: 'Aller', fontSize: '20dp', fontWeight : 'bold'},
            key : 'show'
        }]
    });

    table.addEventListener('click', function(e) {
        if (e.rowData.hasOwnProperty('key') && e.rowData.hasOwnProperty('value')) {
            self.getActivity().actionBar[e.rowData.key] = e.rowData.value;
        } else {
            self.getActivity().actionBar[e.rowData.key]();
        }
    });

    self.add(table);

    return self;
}

module.exports = myWin;
