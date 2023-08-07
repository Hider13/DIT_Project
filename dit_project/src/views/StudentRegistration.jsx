import React,{useRef} from "react";
import axiosClient from '../axios-client';

export const StudentReg=()=>{
    const rno=useRef();
    const name=useRef();
    const email=useRef();
    const phno=useRef();
    const aadharno=useRef();
    const mname=useRef();
    const fname=useRef();
    const parentphno=useRef();
    const dob= useRef();
    const permanentaddr=useRef();
    const presentaddr=useRef();
    const bgroup=useRef();
    const caste=useRef();
    const religion=useRef();

    const onSubmit= async (e)=>{
        e.preventDefault();
        const payload={
            rollNumber :rno.current.value,
            name :name.current.value,
            email :email.current.value,
            phoneNo :phno.current.value,
            aadharNo :aadharno.current.value,
            motherName :mname.current.value,
            fatherName :fname.current.value,
            parentPhNo :parentphno.current.value,
            dob :dob.current.value,
            permanentAddr :permanentaddr.current.value,
            presentAddr :presentaddr.current.value,
            bloodGroup :bgroup.current.value,
            caste :caste.current.value,
            religion :religion.current.value
        }
        const {data}=await axiosClient.post('/studentRegistration',payload)
        .then(console.log("Registered Successfully",data))
        .catch(err =>{
            const response =err.response;
            if(response && response.status===422)
            {
                console.log(response.data.errors);
            }
        })
    }

    return(
        <div>
            <h2>Student Registration Form</h2>
            <div>
            <form onSubmit={onSubmit} >
            <label for="rno" id="rno">Roll Number : </label>
            <input type="text" name="rno" required ref={rno}/><br/><br/>

            <label for="name" id="name">Name : </label>
            <input type="text" name="name" required ref={name}/><br/><br/>

            <label for="email" id="email">Email : </label>
            <input type="email" name="email" required ref={email}/><br/><br/>

            <label for="phno" id="phno">Phone Number : </label>
            <input type="text" name="phno" required ref={phno}/><br/><br/>

            <label for="Aadharno" id="aadharno">Aadhar Number : </label>
            <input type="text" name="aadharno" required ref={aadharno}/><br/><br/>

            <label for="MotherName" id="mothername">Mother's Name : </label>
            <input type="text" name="mname" required ref={mname}/><br/><br/>

            <label for="FatherName" id="fathername">Father's Name : </label>
            <input type="text" name="fname" required ref={fname}/><br/><br/>

            <label for="parentnum" id="parentphno">Parent Number: </label>
            <input type="text" name="parentphno" required ref={parentphno}/><br/><br/>

            <label for="dob" id="dob">Date Of Birth : </label>
            <input type="date" name="dob" required ref={dob}/><br/><br/>

            <label for="permanentaddr" id="permanentaddr">permanent Address : </label>
            <textarea rows="5" cols="20" name="permanentaddr" required ref={permanentaddr}></textarea><br/><br/>

            <label for="presentaddr" id="presentaddr">Present Address : </label>
            <textarea rows="5" cols="20" name="presentaddr" required ref={presentaddr}></textarea><br/><br/>

            <label for="bloodgroup" id="bgroup">Blood Group : </label>
            <input type="text" name="bgroup" required ref={bgroup}/><br/><br/>

            <label for="caste" id="caste">Caste : </label>
            <input type="text" name="caste" required ref={caste}/><br/><br/>

            <label for="Religion" id="religion">Religion : </label>
            <input type="text" name="religion" required ref={religion}/><br/><br/>

            <input type="submit" name="submit"/>
            <input type="reset" name="reset"/>
            </form>
            </div>

        </div>
    )
}
