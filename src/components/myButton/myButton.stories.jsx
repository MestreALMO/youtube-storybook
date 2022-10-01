import React from "react";

import { MyButton } from ".";

export default {
  title: "Components/MyButton",
  component: MyButton,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => {
  return (
    <>
      <MyButton {...args} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: "#000",
  text: "button storybook",
};
