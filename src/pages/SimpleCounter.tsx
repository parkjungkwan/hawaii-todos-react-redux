import React from "react";
import {Countdown} from '../components'
const SimpleCounter = () => <div>
    <Countdown count={0} reset={10} tick={1000}/>
</div>
export default SimpleCounter