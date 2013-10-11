function myWin() {
	var win = Ti.UI.createWindow({
    backgroundColor: 'blue',
    title:'Item Switch',
    fullscreen: false
   });

var LOGIN = 1, LOGOUT = 2;
var loggedIn = false;

var activity = win.activity;

activity.onCreateOptionsMenu = function(e){
  var menu = e.menu;
  var login = menu.add({ title: "Login", itemId: LOGIN , showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM  });
  login.setIcon("login.png");
  login.addEventListener("click", function(e) {
    loggedIn = true;
    // In Android 3.0 and above we need to call invalidateOptionsMenu() for menu changes at runtime
    win.activity.invalidateOptionsMenu();
  });
  var logout = menu.add({ title: "Logout", itemId: LOGOUT , showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM });
  logout.setIcon("logout.png");
  logout.addEventListener("click", function(e) {
    loggedIn = false;
    // In Android 3.0 and above we need to call invalidateOptionsMenu() for menu changes at runtime
    win.activity.invalidateOptionsMenu();
  });
};

activity.onPrepareOptionsMenu = function(e) {
  var menu = e.menu;
  menu.findItem(LOGIN).setVisible(!loggedIn);
  menu.findItem(LOGOUT).setVisible(loggedIn);
};
    return win;
}

module.exports = myWin;
