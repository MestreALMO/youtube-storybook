import React from "react";

import { Title } from ".";

export default {
  title: "Components/Title",
  component: Title,
};

const Template = (args) => {
  return (
    <>
      <Title />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Title text",
};
