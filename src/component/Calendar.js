import Moment from "react-moment";
import useInterval from "../utill/useInterval";
import { useState } from "react";
import styled from "styled-components";
const CalendarBox = styled.div`
  font-weight: 600;
  color: white;
  text-shadow: #828282 1px 0 1px;
  display: flex;
  flex-direction: column;
`;

const TodayDate = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  letter-spacing: 0.05rem;
`;
const NowTime = styled.div`
  font-size: 9rem;
  display: flex;
  justify-content: center;
  line-height: 130px;
`;

const Calendar = () => {
  const [date, setDate] = useState(Date.now());

  // useInterval
  useInterval(() => {
    setDate(Date.now());
  }, 1000);

  return (
    <CalendarBox>
      <TodayDate>
        <Moment format={"MMMM D. ddd"}>{date}</Moment>
      </TodayDate>
      <NowTime>
        <Moment format={"HH:mm"}>{date}</Moment>
      </NowTime>
    </CalendarBox>
  );
};
export default Calendar;
