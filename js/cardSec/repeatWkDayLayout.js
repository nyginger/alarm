

export const repeatDetailLayout = (alarm) =>{
    const alarmArrowIcon=document.querySelector(`#arrow_${alarm.id}`)
    const alarmDetailContents=document.createElement('div')
    alarmDetailContents.classList.add('col-span-7','flex','justify-between','row-start-4','px-4','mx-4','pt-4')
    alarmDetailContents.setAttribute('id',`rptWk_${alarm.id}`)    
    const alarmDay=alarmArrowIcon.getAttribute("data-wkday").split(",");
    const dayInWk=moment()._locale._weekdaysShort
    var j=0
    alarmDay.forEach(wdayVal => {
        alarmDetailContents.append(repeatWkDayLayout(wdayVal,dayInWk[j]))
        j++;
    })
    return alarmDetailContents
}



// Display alarm repeat weekday
const repeatWkDayLayout = (value,wkDay) => {
    const repeatWkDayWrapper = document.createElement('div')
    repeatWkDayWrapper.classList.add('inline')
    const repeatWkDayCheckBox=document.createElement('input')
    repeatWkDayCheckBox.setAttribute('type','checkbox')
    if (value==1){ repeatWkDayCheckBox.setAttribute('checked','') }
    const repeatWkDayLabel=document.createElement('label')
    repeatWkDayLabel.classList.add('text-sm','ml-2')
    repeatWkDayLabel.innerHTML=wkDay
    repeatWkDayWrapper.append(repeatWkDayCheckBox)
    repeatWkDayWrapper.append(repeatWkDayLabel)
    return repeatWkDayWrapper
}
