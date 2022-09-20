import { Component, createSignal } from 'solid-js';
import { format, add } from 'date-fns';

const Tokyo: Component = () => {

    const beesDay = new Date('01 October 1995');
    const now = new Date();
    const TimeHere = format(now, "hh:mm:ss");
    const TTime = add(new Date(), {hours: 9});
    const TokyoTime = format(TTime, "hh:mm:ss");
    console.log(TokyoTime)


    




    return (
        <div class='Ttime'>
            <h2>Time In Tokyo NOW!</h2>
            {TokyoTime}
        </div>
    )

}

export default Tokyo;

