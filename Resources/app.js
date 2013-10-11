var win1 = Ti.UI.createWindow({
    fullscreen : true,
    title : 'Test Android',
    exitOnClose : true, 
    navBarHidden: false,
    color:'black'
});

var table = Ti.UI.createTableView({
    data : [{
        title : 'Action Buttons',
        color: 'orange',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Menu'
    }, {
        title : 'Tabs',
        color: 'orange',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Tabs'
    }, {
        title : 'Other Options',
        color: 'orange',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Options'
    }, {
        title : 'Form',
        color: 'orange',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Form'
    }, {
        title : 'Change Menu',
        color: 'orange',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'MenuItem'
    }, {
        title : 'Different Dialog',
        color: 'orange',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Dialog'
    }, {
        title : 'Multi Line',
        color: 'orange',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Multiline'
    }, {
        title : 'Bubbles',
        color: 'orange',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Bubbles'
    }, {
        title : 'Scroll View',
        color: 'orange',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'ScrollView'
    }]
});

table.addEventListener('click', function(e) {
    var Window = require(e.rowData.module);
    new Window().open();
});

win1.add(table);

win1.open();
