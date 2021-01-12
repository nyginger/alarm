
export const alarmsToggle = () => {
    const alarmsToggleBtn = document.getElementById('alarmToggle')

    if (alarmsToggleBtn.getAttribute('data-alarm-toggle')=='on'){

        alarmsToggleBtn.innerText = 'Alarm Off';
        alarmsToggleBtn.classList.remove('bg-green-500','hover:bg-green-400')
        alarmsToggleBtn.classList.add('bg-red-500','hover:bg-red-400')
        alarmsToggleBtn.setAttribute('data-alarm-toggle','off')
        // setInterval(updateTimer,1000);

    }else{
         alarmsToggleBtn.innerText = 'Alarm On';
        alarmsToggleBtn.classList.remove('bg-red-500','hover:bg-red-400')
        alarmsToggleBtn.classList.add('bg-green-500','hover:bg-green-400')
        alarmsToggleBtn.setAttribute('data-alarm-toggle','on')

    }

}

