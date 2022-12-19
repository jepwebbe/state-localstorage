import styled from "styled-components";

export const StyledCart = styled.section`
  width: 30rem;
  height: 30rem;
  margin: 10rem auto;
  padding: 1rem;
  background-color: aliceblue;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    input {
      background-color: black;
      color: white;
      justify-self: end;
    }
    div {
      display: grid;
      p {
        padding-right: 1rem;
      }
      input {
      }
    }
  }
  section {
    h2 {
        text-align: center;
    }
    ul {
      list-style-type: none;
      input {
        background-color: black;
        color: white;
      }
    }
  }
`;
