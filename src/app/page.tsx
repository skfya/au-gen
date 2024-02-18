'use client';
import { useState } from "react";
import data from "./data.json";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [name3, setName3] = useState('');
  const [result, setResult] = useState('');
  const [log, addToLog] = useState<string[]>([]);
  const [regenerate, changeRegenerate] = useState(false);
  const [logOpen, changeLog] = useState(false);
  const [logButtonText, changeLogButtonText] = useState("View previous prompts");
  const [textIndex, setIndex] = useState(-1);
  
  function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      const formJson = Object.fromEntries(formData.entries());
      setName1(formJson.name1.toString());
      setName2(formJson.name2.toString());
      setName3(formJson.name3.toString());

      if (name1 == "" || name2 == ""){
        setResult("Please enter a name in the Person 1 and Person 2 fields.");
        changeRegenerate(true);
      } else {
        compileResult(false);
      }
  }

  function compileResult(compiled: boolean){
    if (name3 != ""){
      var sentenceList = data.threePeople;
    } else {
      var sentenceList = data.twoPeople;
    }
    var number = textIndex;
    if (!compiled){
      number = Math.floor(Math.random() * sentenceList.length);
    }
    setIndex(number);
    var text = sentenceList[number].replaceAll("{name1}", name1);
    text = text.replaceAll("{name2}", name2);
    text = text.replaceAll("{name3}", name3);
    addToLog([...log, text]);
    setResult(text);
    changeRegenerate(true);
  }

  function handleReset(){
    setName1("");
    setName2("");
    setName3("");
    setResult("");
    changeRegenerate(false);
  }

  function handleLogButtonClick(e){
    // Prevent the browser from reloading the page
    e.preventDefault();

    changeLog(!logOpen);
    if (logOpen){
      changeLogButtonText("View previous prompts");
    } else {
      changeLogButtonText("Hide previous prompts");
    }
  }

  const promptLog = log.map((prompt, index) => <li key={index}>{prompt}</li>);

  function handleOneTwoSwap(e){
    // Prevent the browser from reloading the page
    e.preventDefault();

    if (name1 != "" && name2 != ""){
      var temp = name1;
      setName1(name2);
      setName2(temp);
    }
  }

  function handleTwoThreeSwap(e){
    // Prevent the browser from reloading the page
    e.preventDefault();

    if (name2 != "" && name3 != ""){
      var temp = name2;
      setName2(name3);
      setName3(temp);
    }
  }

  function changeName1(e){
    setName1(e.target.value);
  }

  function changeName2(e){
    setName2(e.target.value);
  }

  function changeName3(e){
    setName3(e.target.value);
  }

  return (
    <main>
      <div>
        <Header />
        <h2>Enter the names of the people in your ship and click submit to get an AU prompt!</h2>
      </div>
      <form method="post" onSubmit={handleSubmit} onReset={handleReset}>
        <label>
          Person 1:
          <input type="text" name="name1" value={name1} onChange={changeName1}></input>
        </label>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={handleOneTwoSwap} className="icon"/>
        <label>
          Person 2:
          <input type="text" name="name2" value={name2} onChange={changeName2}></input>
        </label>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={handleTwoThreeSwap} className="icon"/>
        <label>
          (Optional) Person 3:
          <input type="text" name="name3" value={name3} onChange={changeName3}></input>
        </label>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        {regenerate && <button type="submit">Regenerate</button>}
      </form>
      {regenerate && <div className="bubble">
        <p id="result">{result}</p>
        <hr />
        <button id="logButton" onClick={handleLogButtonClick}>{logButtonText}</button>
        {logOpen && <div>
          <ul>{promptLog}</ul>
        </div>}
      </div>
      }
      <br />
      <Link href="/about">About</Link>
    </main>
  );
}
