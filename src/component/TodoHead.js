import Calendar from "./Calendar";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useInterval from "../utill/useInterval";

const HeadTemplate = styled.div`
  display: flex;
  height: 300px;
  margin-top: 50px;
  justify-content: center;
  flex-direction: column;
`;

const Greetings = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  color: white;
  text-shadow: #828282 1px 0 1px;
  margin-bottom: 10px;
`;

const Searchengine = styled.div`
  width: 468px;
  margin: 0 auto;

  .gsc-input-box {
    border-radius: 16px;
    display: flex;
    align-items: center;
    height: 32px;
  }
  .gsc-search-button {
    display: none;
  }
`;

const $script = document.createElement("script");
$script.src = "https://cse.google.com/cse.js?cx=01e532ed930eb4068";
$script.async = true;
document.body.appendChild($script);

const TodoHead = (props) => {
  const [timer, setTimer] = useState("00:00");

  const currenttimer = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hour}:${minute}`);
  };
  useInterval(currenttimer, 1000);

  const Greeting = () => {
    if ("06:00" < timer && timer < "09:59") {
      return <Greetings>Good Morning🌞</Greetings>;
    } else if ("10:00" < timer && timer < "16:59") {
      return <Greetings>Good Afternoon🌼</Greetings>;
    } else if ("17:00" < timer && timer < "22:59") {
      return <Greetings>Good Evening✨</Greetings>;
    } else {
      return <Greetings>Good night🌙</Greetings>;
    }
  };

  return (
    <HeadTemplate>
      <Calendar />
      {Greeting()}
      <Searchengine>
        <div
          // {...$input.current.setAttribute("placeholder", "이거 되냐 ㅋㅋ")}
          class="gcse-searchbox-only"
          data-resultsUrl="http://www.google.com/search"
          data-newWindow="true"
          data-queryParameterName=""
        ></div>
      </Searchengine>
    </HeadTemplate>
  );
};
export default TodoHead;
