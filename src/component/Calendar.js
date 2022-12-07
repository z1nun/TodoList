import Moment from "react-moment";
// import "moment/locale/ko";
import useInterval from "../utill/useInterval";
import { useState } from "react";
import styled from "styled-components";

const TodayDate = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-shadow: #828282 1px 0 1px;
  display: flex;
  justify-content: center;
  padding-bottom: 300px;
  /* margin-bottom: 300px; */
  /* position: absolute; */
  background-color: antiquewhite;
`;
const NowTime = styled.div`
  font-size: 10rem;
  font-weight: 500;
  color: white;
  text-shadow: #828282 1px 0 1px;
  display: flex;
  justify-content: center;
  margin-bottom: -15px;
  padding: 0px;
  background-color: antiquewhite;
`;
const Calendar = () => {
  const [date, setDate] = useState(Date.now());

  // useInterval
  useInterval(() => {
    setDate(Date.now());
  }, 1000);

  return (
    <div>
      <NowTime>
        <Moment format={"HH:mm"}>{date}</Moment>
      </NowTime>
      <TodayDate>
        <Moment format={"MMMM D ddd"}>{date}</Moment>
      </TodayDate>
    </div>
  );
};
export default Calendar;
