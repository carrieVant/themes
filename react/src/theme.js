/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import * as ThemeColors from '@pxblue/colors';

const typography = {
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  }
};

const darkText = {
    primary: "#ffffff",
    secondary: "#ffffff",
    disabled: "rgba(255,255,255,.25)",
    hint: "#ffffff",
    icon: "#ffffff",
    divider: "rgba(255,255,255,.05)"
};

const input = {
  bottomLine:"#424e54",
  helperText:"#424e54",
  labelText:"#424e54",
  inputText:"#424e54"
};

const darkInput = {
  bottomLine:"#ffffff",
  helperText:"#ffffff",
  labelText:"#ffffff",
  inputText:"#ffffff",
  disabled:"rgba(255, 255, 255, .25)"
};


const background = {
    default: "#eef0f0",
    paper: "#ffffff"
};

const darkBackground = {
  default: "#424e54",
  paper: "#333d43",
  appBar: "#1f1f1f"
};

const action = {
  active:"rgba(0, 0, 0, .6)",
  disabled:"rgba(0, 0, 0, .25)"
};
const darkAction = {
  active:"#ffffff",
  disabled:"rgba(255, 255, 255, .25)"
};

export const blue = 
{
	palette:{
	  primary: ThemeColors.blue,
	  secondary: ThemeColors.lightBlue,
    error: ThemeColors.red,
    background: background,
    action: action,
    line: {stepper: ThemeColors.blue['500']},
    input: input
  },
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  },
  direction: "ltr"
};

export const red = 
{
	palette:{
	  primary: ThemeColors.red,
	  secondary: ThemeColors.black,
    error: ThemeColors.red,
    background: background,
    action: action,
    line: {stepper: ThemeColors.red['500']},
    input: input
  },
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  },
  direction: "ltr"
};

export const blueDark = 
{
	palette:{
	  primary: ThemeColors.black,
	  secondary: ThemeColors.blue,
    error: ThemeColors.red,
    background: darkBackground,
    action: action,
    line: {stepper: ThemeColors.black['500']},
    input: input
  },
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  },
  direction: "ltr"
};

export const redDark = 
{
	palette:{
	  primary: ThemeColors.black,
	  secondary: ThemeColors.red,
    error: ThemeColors.red,
    background: darkBackground,
    action: action,
    line: {stepper: ThemeColors.black['500']},
    input: input
  },
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  },
  direction: "ltr"
};
