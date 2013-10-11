function myWin() {
    var self = Ti.UI.createWindow({
        fullscreen : true,
        navBarHidden: false,
        title : 'Bubbles',
        color:'black'
    }),
    view1 = Ti.UI.createView({ backgroundColor:'white' }),
    view2 = Ti.UI.createView({ backgroundColor:'gray' }),
    view3 = Ti.UI.createView({ backgroundColor:'red' }),
    view4 = Ti.UI.createView({ backgroundColor:'orange' }),
    view5 = Ti.UI.createView({ backgroundColor:'green' }),
    view6 = Ti.UI.createView({ backgroundColor:'blue' }),
    sView = Ti.UI.createScrollableView({
        backgroundColor : 'gray',
        opacity: 0.8,
        showPagingControl :false,
        top : '20dp',
        width : '280dp',
        height : '350dp',
        views : [view1,view2, view3, view4,view5,view6],
        currentPage : 0,
        pagingControlColor : 'transparent'

    });

    if(sView && sView.views && sView.views.length > 0) {
    	var PagingControl = require('PageControl');
        var sViewPagingControl = new PagingControl(sView);
        sView.add(sViewPagingControl);
        self.add(sView);
    }
    return self;
}

module.exports = myWin;
