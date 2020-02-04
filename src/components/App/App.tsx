import React, {Component} from "react";
import TodoTable from "../TodoTable";
import TodoStore from "../../stores/TodoStore";
import NewTodoDialog from "../NewTodoDialog";
import styled, {createGlobalStyle} from "styled-components";

const todoStore = new TodoStore();
const ChangeLog = styled.div`
  text-align: left;
  color: white;
  a {
    color: #f50057;
  }
`;
const TodoTableContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin: 0 10% 0 10%;
`;

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    background-color: #282c34;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

class App extends Component {
  public render() {
    return (
      <>
        <header>
          <ChangeLog>
            <ul>
              <h3>New features 🔔</h3>
              <li>23-05-2019 : rename "Reset" to "Delete" and delete only selected tasks</li>
              <li>01-02-2019 : rename "Importance" to "Impact" + add "Easiness" toggle</li>
              <li>31-01-2019 : Added auto save and load, so no worries on refresh</li>
              <li>22-01-2019 : New print button</li>
              <br />
              <small>
                have more features request? submit to
                <a href="http://www.pavel-kaminsky.com"> Pavel 'PK' Kaminsky</a>
              </small>
            </ul>
          </ChangeLog>
        </header>
        {/*<DevTool/>*/}
        <TodoTableContainer>
          <h1>Let's get shit done today 🕗</h1>
          <br />
          <TodoTable todoStore={todoStore} />
        </TodoTableContainer>
        <NewTodoDialog todoStore={todoStore} />
        <footer>
          <span color={"secondary"}>
            <p className="footer">
              Made with
              <span id="heart"> ♥</span> by
              <b>
                {" "}
                <a href="http://www.pavel-kaminsky.com">Pavel 'PK' Kaminsky</a>
              </b>
            </p>
          </span>
        </footer>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
