import React  from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

function OnlineExam(props)
{
    const {reg, handleSubmit}=useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }

    return(
        <div className="App">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Online Exam</h1>
                <p>wlcm:{""+props.dis.name}</p>
                <label>1) Who is known as the father of C Language ?</label><br/>
                <input type="radio" name="one" value="1" onChange={props.check} ref={reg}/>Vjarne Stroustrup<br/>
                <input type="radio" name="one" value="2" onChange={props.check} ref={reg}/>Dennis Ritchie<br/>
                <input type="radio" name="one" value="1" onChange={props.check} ref={reg}/>James A. Sosling<br/>
                <input type="radio" name="one" value="1" onChange={props.check} ref={reg}/>Dr. E. F. Codd <br/><br/>

                <label>2) C Language was developed in the year ____</label><br/>
                <input type="radio" name="two" value="2" onChange={props.check} ref={reg}/>1970<br/>
                <input type="radio" name="two" value="1" onChange={props.check} ref={reg}/>1975<br/>
                <input type="radio" name="two" value="1" onChange={props.check} ref={reg}/>1985<br/>
                <input type="radio" name="two" value="1" onChange={props.check} ref={reg}/>1980<br/><br/>

                <label>3) Which one is not a reserve keyword in C Language?</label><br/>
                <input type="radio" name="three" value="1" onChange={props.check} ref={reg}/>auto<br/>
                <input type="radio" name="three" value="2" onChange={props.check} ref={reg}/>main<br/>
                <input type="radio" name="three" value="1" onChange={props.check} ref={reg}/>case<br/>
                <input type="radio" name="three" value="1" onChange={props.check} ref={reg}/>register<br/><br/>

                <label>4) A C variable name can start with a ____</label><br/>
                <input type="radio" name="four" value="1" onChange={props.check} ref={reg}/>Number<br/>
                <input type="radio" name="four" value="1" onChange={props.check} ref={reg}/>Plus Sign (+)<br/>
                <input type="radio" name="four" value="2" onChange={props.check} ref={reg}/>Underscore<br/>
                <input type="radio" name="four" value="1" onChange={props.check} ref={reg}/>Asterisk (*)<br/><br/>

                <label>5) Prototype of a function means _____</label><br/>
                <input type="radio" name="five" value="1" onChange={props.check} ref={reg}/>Name of Function<br/>
                <input type="radio" name="five" value="1" onChange={props.check} ref={reg}/>Output of Function<br/>
                <input type="radio" name="five" value="2" onChange={props.check} ref={reg}/>Declaration of Function<br/>
                <input type="radio" name="one" value="1" onChange={props.check} ref={reg}/>Input of a Function<br/><br/>

                <label>6) An uninitialized pointer in C is called ___</label><br/>
                <input type="radio" name="six" value="1" onChange={props.check} ref={reg}/>Constructor<br/>
                <input type="radio" name="six" value="1" onChange={props.check} ref={reg}/>dangling pointer<br/>
                <input type="radio" name="six" value="2" onChange={props.check} ref={reg}/>Wild Pointer<br/>
                <input type="radio" name="six" value="1" onChange={props.check} ref={reg}/>Destructor<br/><br/>

                <label>7) A pointer that is pointing to NOTHING is called ____</label><br/>
                <input type="radio" name="seven" value="1" onChange={props.check} ref={reg}/>VOID Pointer<br/>
                <input type="radio" name="seven" value="1" onChange={props.check} ref={reg}/>DANGLING Pointer<br/>
                <input type="radio" name="seven" value="2" onChange={props.check} ref={reg}/>NULL Pointer<br/>
                <input type="radio" name="seven" value="1" onChange={props.check} ref={reg}/>WILD Pointer<br/><br/>

                <label>8) What is array?</label><br/>
                <input type="radio" name="eight" value="1" onChange={props.check} ref={reg}/>collection of character<br/>
                <input type="radio" name="eight" value="1" onChange={props.check} ref={reg}/>collection of integer<br/>
                <input type="radio" name="eight" value="2" onChange={props.check} ref={reg}/>collection of similar datatypes<br/>
                <input type="radio" name="eight" value="1" onChange={props.check} ref={reg}/>None<br/><br/>

                <label>9) Which one of the following is a loop construct that will always be executed once?</label><br/>
                <input type="radio" name="9th" value="1" onChange={props.check} ref={reg}/>for<br/>
                <input type="radio" name="9th" value="1" onChange={props.check} ref={reg}/>while<br/>
                <input type="radio" name="9th" value="1" onChange={props.check} ref={reg}/>switch<br/>
                <input type="radio" name="9th" value="2" onChange={props.check} ref={reg}/>do while<br/><br/>

                <label>10) What is the only function all C programs must contain?</label><br/>
                <input type="radio" name="10th" value="1" onChange={props.check} ref={reg}/>start()<br/>
                <input type="radio" name="10th" value="1" onChange={props.check} ref={reg}/>system()<br/>
                <input type="radio" name="10th" value="2" onChange={props.check} ref={reg}/>main()<br/>
                <input type="radio" name="10th" value="1" onChange={props.check} ref={reg}/>printf()<br/><br/>


                <button type="submit"><Link to="/Result">SUBMIT</Link> </button>
                
            </form>
        </div>
    )
}

export default OnlineExam;