import {useState} from "react";
export default function StateExample()
{
    const[count,setcount]=useState(0);
    const buttonclick()
    {
        setcount(count+1);
    }
    return<>
    <h1>StateExample</h1>
    <button onclick={buttonclick} style={backgroundc  c}
    </>
}