import React from "react";

import { Title } from ".";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    text: {
      control: "select",
      options: ["Title text 01", "Title text 02", "Title text 03"],
    },
  },
};

const Template = ({ text, colorBlue }) => {
  return (
    <>
      <Title text={text} color={colorBlue ? "blue" : "#000"} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Title text 00",
  colorBlue: false,
};
