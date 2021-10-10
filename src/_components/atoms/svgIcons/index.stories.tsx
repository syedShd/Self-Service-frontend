import { Story, Meta } from "@storybook/react";
import SvgIcon, { IconCompProps } from "./index";
import ThemeWrapper from "../../../wrappers/ThemeWrapper";
import { COLORS } from "../../../core-utils/theme";

export default {
  title: "atoms/svgIcon",
  component: SvgIcon,
  argTypes: { onClick: { action: "Click" } },
} as Meta;

const Template: Story<IconCompProps> = (args) => {
  return (
    <ThemeWrapper>
      <SvgIcon {...args} />
    </ThemeWrapper>
  );
};



export const sortIcon = Template.bind({});
sortIcon.args={icon:"M 17 0 V 12 H 20 L 16 17 L 12 12 H 15 V 0 H 17 Z M 9 14 V 16 H 0 V 14 H 9 Z M 11 7 V 9 H 0 V 7 H 11 Z M 11 0 V 2 H 0 V 0 H 11 Z"}

export const reverseIcon = Template.bind({});
reverseIcon.args={icon:"M 11.5759 12.2969 C 10.3057 13.3975 8.68071 14.0023 7 14 C 3.1339 14 0 10.8661 0 7 C 0 3.1339 3.1339 0 7 0 C 10.8661 0 14 3.1339 14 7 C 14 8.4952 13.531 9.8812 12.733 11.018 L 10.5 7 H 12.6 C 12.5999 5.70934 12.154 4.45834 11.3377 3.45862 C 10.5214 2.4589 9.3848 1.77183 8.12023 1.51365 C 6.85566 1.25547 5.54073 1.44201 4.39787 2.04174 C 3.25502 2.64146 2.35439 3.61754 1.84837 4.80485 C 1.34234 5.99217 1.26196 7.31784 1.62084 8.55759 C 1.97972 9.79735 2.75582 10.8751 3.81786 11.6085 C 4.87989 12.3419 6.16265 12.6859 7.44915 12.5824 C 8.73564 12.4789 9.94689 11.9342 10.878 11.0404 L 11.5759 12.2969 Z"}

export const groupIcon = Template.bind({});
groupIcon.args={icon:"M 14.5 7 C 15.88 7 16.99 5.88 16.99 4.5 C 16.99 3.12 15.88 2 14.5 2 C 13.12 2 12 3.12 12 4.5 C 12 5.88 13.12 7 14.5 7 Z M 7 6 C 8.66 6 9.99 4.66 9.99 3 C 9.99 1.34 8.66 0 7 0 C 5.34 0 4 1.34 4 3 C 4 4.66 5.34 6 7 6 Z M 14.5 9 C 12.67 9 9 9.92 9 11.75 V 14 H 20 V 11.75 C 20 9.92 16.33 9 14.5 9 Z M 7 8 C 4.67 8 0 9.17 0 11.5 V 14 H 7 V 11.75 C 7 10.9 7.33 9.41 9.37 8.28 C 8.5 8.1 7.66 8 7 8 Z"}


export const shareIcon = Template.bind({});
shareIcon.args={icon:"M 10 11 H 8 C 6.3596 10.9994 4.75023 11.4471 3.34588 12.2949 C 1.94152 13.1427 0.795601 14.3582 0.0320014 15.81 C 0.010538 15.5405 -0.000137283 15.2703 0.00000133261 15 C 0.00000133261 9.477 4.477 5 10 5 V 0 L 20 8 L 10 16 V 11 Z"}

export const barGraphIcon = Template.bind({});
barGraphIcon.args={icon:"M 0 10 H 4 V 19 H 0 V 10 Z M 14 6 H 18 V 19 H 14 V 6 Z M 7 0 H 11 V 19 H 7 V 0 Z",iconColor:COLORS.TERTIARY_GREY_300}

export const prodIcon = Template.bind({});
prodIcon.args={icon:"M 20 0 H 2 C 0.9 0 0 0.9 0 2 V 14 C 0 15.1 0.9 16 2 16 H 7 V 18 H 15 V 16 H 20 C 21.1 16 21.99 15.1 21.99 14 L 22 2 C 22 0.9 21.1 0 20 0 Z M 20 14 H 2 V 2 H 20 V 14 Z M 18 5 H 7 V 7 H 18 V 5 Z M 18 9 H 7 V 11 H 18 V 9 Z M 6 5 H 4 V 7 H 6 V 5 Z M 6 9 H 4 V 11 H 6 V 9 Z",iconColor:COLORS.TERTIARY_GREY_500}

export const dragIcon = Template.bind({});
dragIcon.args={icon:"M 2 4 C 0.899999 4 -1.35505e-7 3.1 -8.74228e-8 2 C -3.93403e-8 0.899999 0.9 -6.60042e-7 2 -6.11959e-7 C 3.1 -5.63877e-7 4 0.899999 4 2 C 4 3.1 3.1 4 2 4 Z M 10 2 C 10 0.9 9.1 -3.01609e-7 8 -3.49691e-7 C 6.9 -3.97774e-7 6 0.9 6 2 C 6 3.1 6.9 4 8 4 C 9.1 4 10 3.1 10 2 Z M 16 2 C 16 0.9 15.1 -3.93402e-8 14 -8.74228e-8 C 12.9 -1.35505e-7 12 0.9 12 2 C 12 3.1 12.9 4 14 4 C 15.1 4 16 3.1 16 2 Z M 12 8 C 12 9.1 12.9 10 14 10 C 15.1 10 16 9.1 16 8 C 16 6.9 15.1 6 14 6 C 12.9 6 12 6.9 12 8 Z M 10 8 C 10 6.9 9.1 6 8 6 C 6.9 6 6 6.9 6 8 C 6 9.1 6.9 10 8 10 C 9.1 10 10 9.1 10 8 Z M 4 8 C 4 6.9 3.1 6 2 6 C 0.899999 6 -3.01609e-7 6.9 -3.49691e-7 8 C -3.97774e-7 9.1 0.899999 10 2 10 C 3.1 10 4 9.1 4 8 Z"}
