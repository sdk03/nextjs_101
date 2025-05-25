"use client"
import {useState, FormEvent} from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
    const [inputVal,setInputVal] = useState("");
    const {push} = useRouter();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        push(`/page2/${inputVal}`)
    };
  return (
    <div className="p-5">
      Enter your name and see it in color!
      <br /><br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" id="text" placeholder="Enter your name" value={inputVal} autoComplete="off" onChange={(e) => {
            setInputVal(e.target.value)
        }} />
        <button type="submit">See the magic happen!</button>
      </form>
    </div>    
  );
}