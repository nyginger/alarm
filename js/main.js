import { alarmsToggle } from './alarmsSwitch.js'
import { buildAlarmArray,   } from "./cardSec/cardLayout.js"
import { repeatToggle,  } from './addLayout.js'
import { getAlarmList, addAlarm } from './fetch/crudAlarms.js'

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
      initApp();
    }
  });

const initApp = () => {
    var alarmSound = new Audio( );
    alarmSound.src = 'bell_sound.mp3';
    const curDateTime= new Date().toLocaleDateString('ko-KR')

    console.log(curDateTime)
    // document.querySelector('#alarmDate').value=curDateTime.replace(/\. /g,'-').replace(/\./g,'')
    document.querySelector('#alarmDate').value=curDateTime
    document.querySelector('#alarmTime').value=new Date().toString().slice(16,21)



    if (getAlarmList) buildAlarmArray(getAlarmList)
    document.querySelector('#alarmToggle').addEventListener('click', () => {alarmsToggle()})
    document.querySelector('#repeat_check').addEventListener('click', () => {repeatToggle()})
    document.querySelector('#alarmButton').addEventListener('click', () => {addAlarm()})

}



const updateTimer = () => {
    var alarmDate=new Date();
    var curTime=moment().local();
    curTimeVal=curTime.valueOf();
    wkDay= moment(alarmDate).day();
    //console.log(curTime)
    if(wkDay>=1 && wkDay<=5){
        var alarmTime1=moment(alarmDate).set({'hour':alarmList[0].time1[0],'minute':alarmList[0].time1[1],'second':0,'millisecond':0});
        var alarmTime2=moment(alarmDate).set({'hour':alarmList[0].time2[0],'minute':alarmList[0].time2[1],'second':0,'millisecond':0});
        var alarmTime3=moment(alarmDate).set({'hour':alarmList[0].time3[0],'minute':alarmList[0].time3[1],'second':0,'millisecond':0});
        var alarmTime4=moment(alarmDate).set({'hour':alarmList[0].time4[0],'minute':alarmList[0].time4[1],'second':0,'millisecond':0});

    }else{
        var alarmTime1=moment(alarmDate).set({'hour':alarmList[1].time1[0],'minute':alarmList[1].time1[1],'second':0,'millisecond':0});
        var alarmTime2=moment(alarmDate).set({'hour':alarmList[1].time2[0],'minute':alarmList[1].time2[1],'second':0,'millisecond':0});
        var alarmTime3=moment(alarmDate).set({'hour':alarmList[1].time3[0],'minute':alarmList[1].time3[1],'second':0,'millisecond':0});
        var alarmTime4=moment(alarmDate).set({'hour':alarmList[1].time4[0],'minute':alarmList[1].time4[1],'second':0,'millisecond':0});
    }
    diffTime1=alarmTime1.valueOf()-curTimeVal;
    diffTime2=alarmTime2.valueOf()-curTimeVal;
    diffTime3=alarmTime3.valueOf()-curTimeVal;
    diffTime4=alarmTime4.valueOf()-curTimeVal;
    if (diffTime1<1000 && diffTime1>0){
        initAlarm();
    }
    if (diffTime2<1000 && diffTime2>0){
        initAlarm();

    }
    if (diffTime3<=1000 && diffTime3>0){
        initAlarm();
    }
    if (diffTime4<=1000 && diffTime4>0){
        initAlarm();
    }

}

