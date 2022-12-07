import Calendar from "./Calendar";
import styled from "styled-components";

const QuoteStyle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0 160px;
  margin-bottom: 10px;
  color: white;
  text-shadow: black 1px 1px 2px;
  display: flex;
  justify-content: center;
  background-color: aqua;
`;

const TodoHead = (props) => {
  console.log(props.quotes);

  const randomNum = Math.floor(Math.random() * 100);
  return (
    <div>
      <QuoteStyle>
        {props.quotes && <div>{props.quotes[randomNum].quote}</div>}
      </QuoteStyle>
      <QuoteStyle>
        {props.quotes && <div>-{props.quotes[randomNum].author}-</div>}
      </QuoteStyle>
      <Calendar />
    </div>
  );
};
export default TodoHead;
