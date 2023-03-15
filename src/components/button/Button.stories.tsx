import React from "react";
import {Button, ButtonAzul} from './Button';

export default {
  title: "Button"
};

export const Primary = () => <Button label="normal" />;

export const Secondary = () => <ButtonAzul label="azul" />;