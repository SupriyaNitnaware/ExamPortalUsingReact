import React from 'react';

function Result(props)
{
    return(
        <div>
            <h1>Username :{props.dis.name}</h1>
           <h1>Result</h1>
           <h3>Number of question : 10</h3>
           <h3>Number of correct question : {props.ms}</h3><br/>
           <h3>Marks you got : {(props.ms)*2}</h3><br/>
           <h3>Number of incorrect question :{(10-(props.ms))} </h3>
        </div>
    )
}

export default Result;