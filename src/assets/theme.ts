import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    props?: {
      MuiAppBar?: {
        color?: string
      },
      MuiButton?: {
        size?: string;
      },
      MuiButtonGroup?: {
        size?: string;
      },
      MuiCheckbox?: {
        size?: string;
      },
      MuiFab?: {
        size?: string;
      },
      MuiFormControl?: {
        margin?: string;
        size?: string;
      },
      MuiFormHelperText?: {
        margin?: string;
      },
      MuiIconButton?: {
        size?: string;
      },
      MuiInputBase?: {
        margin?: string;
      },
      MuiInputLabel?: {
        margin: string;
      },
      MuiRadio?: {
        size: string;
      },
      MuiSwitch?: {
        size: string;
      },
      MuiTextField?: {
        margin?: string;
        size?: string;
      },
      MuiList?: {
        dense?: boolean;
      },
      MuiMenuItem?: {
        dense?: boolean;
      },
      MuiTable?: {
        size?: 'small';
      },
    };
    overrides?: {
      MuiAppBar?: {
        colorInherit?: {
          backgroundColor: string,
          color: string,
        },
      },
    },
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#464440',
    },
    secondary: {
      main: '#71282f',
    },
    error: {
      main: '#ea1010',
    },
    warning: {
      main: '#ed020f',
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
});
