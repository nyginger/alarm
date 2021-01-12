
import { setAttributes } from './etc.js'


export const repeatToggle = () => {
    
    if( document.querySelector('#repeat_check').checked){
        document.querySelector('#repeat_wk').style.display = '';

        const weekDay=moment()._locale._weekdaysShort
        const wkDayCheckbox=document.querySelector("#repeat_wk")
        wkDayCheckbox.innerHTML=''

        var n=0;
        weekDay.forEach( wd =>{
            const wDayContents= wDayCheckboxContents(wd,n)
            wkDayCheckbox.append(wDayContents)
            n++;
        })
    }else{
        
        document.querySelector('#repeat_wk').style.display = 'none';
    }
    
}

const wDayCheckboxContents = (wd,i) =>{
    const wDayContents=document.createElement('div')
    const wDayItem=document.createElement('input')
    wDayItem.classList.add('wkday')
    setAttributes(wDayItem,{'type':'checkbox','id':`wkd${i}`})
    
    const wDayLabel=document.createElement('label')
    wDayLabel.classList.add('font-bold','ml-3')
    wDayLabel.innerHTML=wd
    wDayContents.append(wDayItem)
    wDayContents.append(wDayLabel)

    return wDayContents
}


