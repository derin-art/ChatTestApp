// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/react";
import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";

test("rendersMessage", () => {
  render(<ChatFooter></ChatFooter>);
  const sendButton = screen.getAllByTestId("sendButton");
  const messageBox = screen.getAllByTestId("messageBox");
  fireEvent.click(sendButton);
  expect(messageBox).toHaveValue("");
});
