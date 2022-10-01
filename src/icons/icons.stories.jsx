import React from "react";
import { useState, useEffect } from "react";

import { Icon } from "./";
import { Bird } from "./partials/bird";
import { Cancel } from "./partials/cancel";
import { DirectionSign } from "./partials/directionSign";
import { IconsStoryBookContainer } from "./storybookContainer";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => {
  const [width, setWidth] = useState(0);
  useEffect(() => setWidth(window.innerWidth), []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: width > 900 ? "repeat(5, 5fr)" : "repeat(3, 5fr)",
        borderTop: "1px solid black",
        borderLeft: "1px solid black",
      }}
    >
      <IconsStoryBookContainer iconName="Bird">
        <Icon viewBox="0 0 550 550" {...args}>
          <Bird />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Cancel Order">
        <Icon viewBox="-4 -4 55 55" {...args}>
          <Cancel />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Direction Sign">
        <Icon viewBox="0 0 70 70" {...args}>
          <DirectionSign />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Direction Sign">
        <Icon viewBox="0 0 70 70" {...args}>
          <DirectionSign />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Direction Sign">
        <Icon viewBox="0 0 70 70" {...args}>
          <DirectionSign />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Direction Sign">
        <Icon viewBox="0 0 70 70" {...args}>
          <DirectionSign />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Direction Sign">
        <Icon viewBox="0 0 70 70" {...args}>
          <DirectionSign />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Direction Sign">
        <Icon viewBox="0 0 70 70" {...args}>
          <DirectionSign />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Direction Sign">
        <Icon viewBox="0 0 70 70" {...args}>
          <DirectionSign />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Direction Sign">
        <Icon viewBox="0 0 70 70" {...args}>
          <DirectionSign />
        </Icon>
      </IconsStoryBookContainer>
      <IconsStoryBookContainer iconName="Direction Sign">
        <Icon viewBox="0 0 70 70" {...args}>
          <DirectionSign />
        </Icon>
      </IconsStoryBookContainer>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  height: "50px",
  width: "50px",
  color: "#000",
};
