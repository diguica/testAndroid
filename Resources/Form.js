
function myWin() {
    var self = Ti.UI.createWindow({
        fullscreen : true,
        navBarHidden: false,
        title : 'Holo Style Form',
        color:'black'
    });
    var scrollView = Titanium.UI.createScrollView({
        contentWidth: Ti.UI.SIZE,
        contentHeight: Ti.UI.SIZE,
        layout:'vertical',
        top: 0,
        bottom: 0,
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true
    });
     
    self.add(scrollView);
     
    var a = Titanium.UI.createAlertDialog({
        title:'Alert Test',
        message:'Hello World'
    });
     
    var contactUs = Titanium.UI.createLabel({
        color:'#999',
        text:"",
        font:{fontSize:15,fontFamily:'Helvetica Neue'},
        height:Ti.UI.SIZE
    });
     
    var contactName = Titanium.UI.createLabel({
        color:'#fff',
        text:'Name',
        height:Ti.UI.SIZE
    });
     
    var contactNameField = Titanium.UI.createTextField({
        hintText:'enter name', left:'5dp',
    	  right:'5dp',
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
    });
     
    var emailName = Titanium.UI.createLabel({
        color:'#fff',
        text:'Email Address',
        height:Ti.UI.SIZE
    });
     
    var emailField = Titanium.UI.createTextField({
        hintText:'enter email address', left:'5dp',
    	  right:'5dp',
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
    });
     
    var phoneNumber = Titanium.UI.createLabel({
        color:'#fff',
        text:'Phone Number',
        height:Ti.UI.SIZE
    });
     
    var phoneNumberField = Titanium.UI.createTextField({
        hintText:'enter phone number', left:'5dp',
    	  right:'5dp',
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType:Titanium.UI.KEYBOARD_PHONE_PAD,
        returnKeyType:Titanium.UI.RETURNKEY_DONE
    });
     
    var contactHow = Titanium.UI.createLabel({
        color:'#fff',
        text:'Best way to contact you',
        height:Ti.UI.SIZE
    });
     
    var contactHowField = Titanium.UI.createTextField({
        hintText:"Best way to contact you", left:'5dp',
    	  right:'5dp',
        blur:true,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
    });
     
    var eventDate = Titanium.UI.createLabel({
        color:'#fff',
        text:'Date of Event',
        height:Ti.UI.SIZE
    });
     
    var eventDateField = Titanium.UI.createTextField({
        hintText:"Date of Event", left:'5dp',
    	  right:'5dp',
        blur:true,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
    });
     
    var eventType = Titanium.UI.createLabel({
        color:'#fff',
        text:'Type of Event',
        height:Ti.UI.SIZE
    });
     
    var eventTypeField = Titanium.UI.createTextField({
        hintText:"Type of Event", left:'5dp',
    	  right:'5dp',
        blur:true,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
    });
     
    var budgetAmount = Titanium.UI.createLabel({
        color:'#fff',
        text:'What is your budget',
        height:Ti.UI.SIZE
    });
     
    var budgetAmountField = Ti.UI.createTextArea({
    	  font: {fontSize:'20dp', fontWeight:'bold'},
    	  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
    	  returnKeyType: Ti.UI.RETURNKEY_GO,
    	  textAlign: 'left',
    	  value: 'I am a textarea',
    	  left:'5dp',
      	  right:'5dp',
    	  height : '70dp'
    	});
    
    
    var picker = Ti.UI.createPicker({ left:'5dp',
    	right:'5dp',
    	selectionIndicator: false
    	});

    	var data = [];
    	data[0]=Ti.UI.createPickerRow({title:'Bananas'});
    	data[1]=Ti.UI.createPickerRow({title:'Strawberries'});
    	data[2]=Ti.UI.createPickerRow({title:'Mangos'});
    	data[3]=Ti.UI.createPickerRow({title:'Grapes'});

    	picker.add(data);
    	/*var l2 = Titanium.UI.createLabel({
    		text:'Appcelerator',
    		height:100,
    		width:'auto',
    		shadowColor:'#aaa',
    		shadowOffset:{x:5,y:5},
    		color:'#900',
    		font:{fontSize:'48dp', fontStyle:'italic'},
    		top:10,
    		textAlign:'center'
    	});*/
    	var l2 = Titanium.UI.createLabel({	font: { fontSize : '28dp', fontWeight:'bold', fontFamily:'Aller'},
								    		color:'#900',
								            top:0,
								            left:'3dp',
								            height:'35dp',
								            borderRadius: 20,
								            borderWidth: 0,
								            width: Ti.UI.SIZE,
								            className:'tagLabel',
								            backgroundColor:'orange',
								            text:'Appcelerator',}),
       contentLabel = Ti.UI.createView({layout:'horizontal',
										top:'5dp',
										left:'5dp',
										right:'40dp',
										width: '200dp',
										backgroundColor:'transparent',
										className : 'labelContentRow'}),
    	row = Ti.UI.createView({top:'5dp',
					    		left : '5dp',
								right : '5dp',
						        height: '50dp',
						        textAlign : 'left',
						        className : 'titleRow'});

     
//  scrollView.add(contactName);
  //  contactNameField.top = '50dp';
  //  self.add(contactNameField);
//    scrollView.add(emailName);
    emailField.top = '100dp';
    self.add(emailField);
    //    scrollView.add(phoneNumber);
    phoneNumberField.top = '150dp';
    self.add(phoneNumberField);
    //scrollView.add(contactHow);
    contactHowField.top = '200dp';
    self.add(contactHowField);
    //scrollView.add(eventDate);
    eventDateField.top = '250dp';
    self.add(eventDateField);
    //scrollView.add(eventType);
    eventTypeField.top = '300dp';
    self.add(eventTypeField);
    //scrollView.add(budgetAmount);
    budgetAmountField.top = '350dp';
    self.add(budgetAmountField);
    picker.top = '400dp';
    self.add(picker);
    
    contentLabel.add(l2);
    row.add(contactNameField);
     self.add(row);
    return self;
}

module.exports = myWin;
