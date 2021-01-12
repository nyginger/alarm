import { getAlarmList } from '../fetch/crudAlarms.js'
import { alarmDetailIconItem } from './detailLayout.js'
import { alarmCancelItem } from './removeBtnLayout.js'
import { setAttributes } from '../etc.js'



export const buildAlarmArray = (alarmList) =>{
        var i=0
        alarmList.forEach(alarm => {

            const alarmContents = document.createElement("div");
            alarmContents.classList.add('box','rounded-xl','bg-gray-100','shadow-2xl','mt-10','mx-7');
            alarmContents.append(alarmCancelItem(alarm))
            const alarmItemBox=creatAlarmBoxContents(alarm,i);

            alarmContents.append(alarmItemBox)
            document.querySelector('#alarms').append(alarmContents)
            i++
        });
}


const creatAlarmBoxContents = (alarm,i) => {

    const alarmItemContents =document.createElement('div')
    alarmItemContents.classList.add('grid','grid-cols-7','grid-rows-4')
    alarmItemContents.setAttribute('id',`box_${alarm.id}`)        
    alarmItemContents.append(alarmTitleItem(i))
    alarmItemContents.append(alarmDateItem(alarm))
    alarmItemContents.append(alarmRepeatItem(alarm))
    alarmItemContents.append(alarmTimeItem(alarm))
    alarmItemContents.append(alarmSwitchItem(alarm))
    alarmItemContents.append(alarmDetailIconItem(alarm))

    return alarmItemContents
         
}


// Alarm Title
const alarmTitleItem = (i) => {
    const alarmTitleWrapper = document.createElement('div')
    alarmTitleWrapper.classList.add('col-span-3','col-start-1','row-span-1')
    const alarmTitleDiv= document.createElement('p')
    alarmTitleDiv.classList.add('text-xl','items-center','pl-5','pt-3')
    alarmTitleDiv.innerHTML= `Alarm ${i+1}`      
    alarmTitleWrapper.append(alarmTitleDiv)

    return alarmTitleWrapper                
}


// Display Alarm date
const alarmDateItem = (alarm) => {
    const alarmDateWrapper = document.createElement('div')
    alarmDateWrapper.classList.add('col-start-1','col-span-1','row-start-2','row-span-1','place-self-end')
    alarmDateWrapper.innerHTML= alarm.date
     
    return alarmDateWrapper                
}


// Display Alarm time
const alarmTimeItem = (alarm) => {
    const alarmTimeWrapper = document.createElement('div')
    alarmTimeWrapper.classList.add('col-start-1','col-span-6','row-start-2','row-span-2','place-self-center')
    const alarmTimeDiv= document.createElement('p')
    alarmTimeDiv.classList.add('text-6xl','font-bold')
    setAttributes(alarmTimeDiv,{'data-alarm-id':`${alarm.id}`,'data-time':`${alarm.time}`})
    alarmTimeDiv.innerHTML=alarm.time
    const alarmNewTimeInput=document.createElement('input')
    alarmNewTimeInput.classList.add('text-5xl','font-bold','cursor-pointer')
    setAttributes(alarmNewTimeInput,{'id':`time_${alarm.id}`,'type':'time','style':"width:100%;display:none"})
    alarmTimeWrapper.append(alarmTimeDiv)
    alarmTimeWrapper.append(alarmNewTimeInput)
         
    return alarmTimeWrapper                
}

// Display alarm repeat
const alarmRepeatItem = (alarm) => {
    const alarmRepeatWrapper = document.createElement('div')
    alarmRepeatWrapper.classList.add('col-start-1','col-span-1','row-start-3','row-span-1','place-self-end')
    alarmRepeatWrapper.innerHTML= alarm.repeat     
    return alarmRepeatWrapper                
}

// Display alarm on/off switch
const alarmSwitchItem = (alarm) => {
    const alarmSwitchWrapper = document.createElement('div')
    alarmSwitchWrapper.classList.add('col-start-7','col-end-8','row-start-2','row-span-1','place-self-center','pt-2')
    const alarmSwitchDiv= document.createElement('i')
    alarmSwitchDiv.classList.add('fas','fa-3x','fa-toggle-on','items-center')
    setAttributes(alarmSwitchDiv, {'id':`toggle_${alarm.id}`,'style':"color:Dodgerblue"})
    alarmSwitchDiv.addEventListener('click',()=> {alarmSwitchToggle(alarm)})
    
    alarmSwitchWrapper.append(alarmSwitchDiv)
    return alarmSwitchWrapper                
}
             


const alarmSwitchToggle = (alarm) => {
    
    const btnSwitch=document.querySelector(`#toggle_${alarm.id}`)
    if (btnSwitch.classList.contains('fa-toggle-on')){
        btnSwitch.classList.remove('fa-toggle-on')
        btnSwitch.classList.add('fa-toggle-off')
        btnSwitch.style.color='gray'

    }else{
        btnSwitch.classList.remove('fa-toggle-off')
        btnSwitch.classList.add('fa-toggle-on')
        btnSwitch.style.color='Dodgerblue'
        

    }

}





const updateAlarm = (e) => {

    alarmID=e.getAttribute('data-alarm-id')
    i=0
    getAlarmList.forEach(alarm => {
        if(alarm.id==alarmID){

            var new_time=document.querySelector(`#time_${alarmID}`)
            
            
            var new_alarm={
            id: alarmID,
            date: alarmDate,
            time: alarmTime,
            repeat:repeatWk,
            wkday:alarmWkList
            }
            getAlarmList.splice(i,1)

            getAlarmList.push(new_alarm);
            localStorage.setItem('alarms', JSON.stringify(getAlarmList));
            location.reload();        
        }
    })


    
}


