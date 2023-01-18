import xapi from 'xapi';


//URL that is displayed on alarm dectection
let url = 'https://tyosgood.github.io/checkgcc/images/fire_alarm.gif'



try{
xapi.Config.RoomAnalytics.T3AlarmDetection.Mode.set("On");
xapi.Config.RoomAnalytics.T3AlarmDetection.Timeout.set(15);
}catch (e) {
    console.error('Error:', e.message);
}

xapi.Status.RoomAnalytics.T3Alarm.Detected.on(value => {
    if (value === 'True')
      //Put the stuff you want the device to do when it dectects an alarm here
      xapi.Command.UserInterface.WebView.Display({Mode: 'Fullscreen', Url: url })
    else
      xapi.Command.Userinterface.WebView.Clear()
});


    