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
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Menu'
    }, {
        title : 'Tabs',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Tabs'
    }, {
        title : 'Other Options',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Options'
    }, {
        title : 'Form',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Form'
    }, {
        title : 'Change Menu',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'MenuItem'
    }, {
        title : 'Different Dialog',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Dialog'
    }, {
        title : 'Multi Line',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Multiline'
    }, {
        title : 'Bubbles',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'Bubbles'
    }, {
        title : 'Scroll View',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'ScrollView'
    }, {
        title : 'Scroll View',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'ScrollView'
    }, {
        title : 'Scroll View',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'ScrollView'
    }, {
        title : 'Scroll View',
        color: 'green',font: {fontFamily: 'Aller', fontSize: '25dp', fontWeight : 'bold'},
        module : 'ScrollView'
    }]
});

table.addEventListener('click', function(e) {
    var Window = require(e.rowData.module);
    new Window().open();
});

win1.add(table);

win1.open();
