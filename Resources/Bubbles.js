function myWin() {
    var self = Ti.UI.createWindow({
        fullscreen : true, navBarHidden: false,
        title : 'Bubbles',
        color:'black',
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE,
        layout:'vertical'
    });

    var labelView = Ti.UI.createView({
    	backgroundImage: '/images/balloon_in.png',
        top:'5dp',
        left: '14dp',
        width:Titanium.UI.SIZE,
        height:Titanium.UI.SIZE
    });
    
    var label = Ti.UI.createLabel({
        backgroundColor:'transparent',
        text: 'añlskfj ñlakjdsf ñaljskdf ñaljskdf asdlkj asdkj asdlkjf lañksjd ñlaksj ñlaksj lñaksj lñkasj klj asdlkj asdkj asdlkjf lañksjd ñlaksj ñlaksj lñaksj lñkasj klj ',
        font: { fontSize:'16dp' },
        color:'black',
        left: '18dp',
        top:'5dp',
        bottom:'5dp',
        right:'5dp',
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
       
    });
    
    labelView.add(label);
    self.add(labelView);
  
    /*
     * 
     */ 
    
    var labelView1 = Ti.UI.createView({
   	 backgroundImage: '/images/boobles_in.png',
       top:'5dp',
       left: '14dp',
       width:Titanium.UI.SIZE,
       height:Titanium.UI.SIZE
   });
   
   var label1 = Ti.UI.createLabel({
       backgroundColor:'transparent',
       text: 'añlskfj ñlakjdsf ñaljskdf asdlkj asdkj asdlkjf lañksjd ñlaksj ñlaksj lñaksj lñkasj klj ljkas lkaj lkajsd lkas ',   
       font: { fontSize:'16dp' },
       color:'black',
       left: '18dp',
       top:'5dp',
       bottom:'5dp',
       right:'5dp',
       textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
      
   });
   
   labelView1.add(label1);
   self.add(labelView1);
    
   
   /*
    * 
    */ 
   
   var labelView2 = Ti.UI.createView({
  	 backgroundImage: '/images/button.png',
      top:'5dp',
      left: '14dp',
      width:Titanium.UI.SIZE,
      height:Titanium.UI.SIZE
  });
  
  var label2 = Ti.UI.createLabel({
      backgroundColor:'transparent',
      text: 'añlskfj ñlakjdsf ñaljskdf asdlkj asdkj asdlkjf lañksjd ñlaksj ñlaksj lñaksj lñkasj klj ljkas lkaj lkajsd lkas ',   
      font: { fontSize:'16dp' },
      color:'black',
      left: '18dp',
      top:'5dp',
      bottom:'5dp', right:'5dp',
      textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
     
  });
  
  labelView2.add(label2);
  self.add(labelView2);
    
  /*
   * 
   */ 
  
  var labelView3 = Ti.UI.createView({
 	 backgroundImage: '/images/popup_in.png',
     top:'5dp',
     left: '14dp',
     width:Titanium.UI.SIZE,
     height:Titanium.UI.SIZE
 });
 
 var label3 = Ti.UI.createLabel({
     backgroundColor:'transparent',
     text: 'añlskfj ñlakjdsf ñaljskdf asdlkj asdkj asdlkjf lañksjd ñlaksj ñlaksj lñaksj lñkasj klj ljkas lkaj lkajsd lkas ',   
     font: { fontSize:'16dp' },
     color:'black',
     left: '18dp',
     top:'5dp',
     bottom:'15dp', right:'5dp',
     textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
    
 });
 
 labelView3.add(label3);
 self.add(labelView3);
 
   
    return self;
}

module.exports = myWin;
