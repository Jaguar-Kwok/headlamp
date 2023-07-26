import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import { createTheme, Theme } from '@material-ui/core/styles';
import React from 'react';

declare module '@material-ui/core/styles/createPalette.d' {
  interface Palette {
    success: PaletteColor;
    sidebarLink: {
      [propName: string]: any;
    };
    [propName: string]: any;
  }
  interface PaletteOptions {
    success?: PaletteColorOptions;
    sidebarLink: {
      [propName: string]: any;
    };
    [propName: string]: any;
  }
}

const commonRules = {
  palette: {
    primary: {
      contrastText: '#fff',
      main: '#0078d4',
    },
    primaryColor: '#000',
    success: {
      light: '#f8fff0',
      main: green['800'],
      ...green,
    },
    warning: {
      main: 'rgb(196, 69, 0)', // orange
      light: orange['50'],
      ...orange,
    },
    squareButton: {
      background: '#f5f5f5',
    },
    sidebarLink: {
      color: '#e7e7e7',
      main: {
        selected: {
          color: '#000',
          backgroundColor: '#fff200',
        },
        color: '#fff',
      },
      selected: {
        color: '#fff099',
        backgroundColor: 'unset',
      },
      hover: {
        color: '#000',
        backgroundColor: '#3B3A39',
      },
    },
    sidebarButtonInLinkArea: {
      color: '#fff',
      primary: {
        background: '#605e5c',
      },
      hover: {
        background: '#3B3A39',
      },
    },
    home: {
      status: {
        error: red['800'],
        success: '#107C10',
        warning: orange['50'],
        unknown: grey['800'],
      },
    },
    sidebarBg: '#242424',
    error: {
      main: red['800'],
      light: red['50'],
    },
    resourceToolTip: {
      color: 'rgba(0, 0, 0, 0.87)',
    },
    normalEventBg: '#F0F0F0',
    chartStyles: {
      defaultFillColor: grey['300'],
      labelColor: '#000',
    },
    metadataBgColor: '#f3f2f1',
    headerStyle: {
      normal: {
        fontSize: '1.8rem',
        fontWeight: '700',
      },
      main: {
        fontSize: '1.87rem',
        fontWeight: '700',
      },
      subsection: {
        fontSize: '1.85rem',
        fontWeight: '700',
      },
      label: {
        fontSize: '1.6rem',
        paddingTop: '1rem',
      },
    },
    tables: {
      head: {
        background: '#faf9f8',
        color: '#242424',
      },
      body: {
        background: '#fff',
      },
    },
    notificationBorderColor: 'rgba(0,0,0,0.12)',
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: ['Overpass', 'sans-serif'].join(', '),
    h1: {
      fontWeight: 700,
      fontSize: '1.87rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '1.3em',
        color: '#fff',
        backgroundColor: '#000',
        // opacity: '1.0',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#f5f5f5',
      },
    },
    MuiIconButton: {
      colorPrimary: {
        color: '#000',
      },
    },
    MuiLink: {
      root: {
        color: '#0078D4',
      },
    },
  },
};

const lightTheme = createTheme(commonRules);

const darkTheme = createTheme({
  ...commonRules,
  palette: {
    ...commonRules.palette,
    tables: {
      head: {
        background: '#000',
        color: '#aeaeae',
      },
      body: {
        background: '#1B1A19',
      },
    },
    primary: {
      contrastText: '#000',
      main: '#4B99EE',
    },
    squareButton: {
      background: '#424242',
    },
    primaryColor: '#fff',
    chartStyles: {
      defaultFillColor: 'rgba(20, 20, 20, 0.1)',
      fillColor: '#929191',
      labelColor: '#fff',
    },
    success: {
      light: green['800'],
      main: green['50'],
      ...green,
    },
    warning: {
      main: 'rgb(255 181 104)', // orange
      light: 'rgba(255, 152, 0, 0.15)',
      ...orange,
    },
    error: {
      main: red['800'],
      light: 'rgba(244, 67, 54, 0.2)',
    },
    home: {
      status: {
        error: '#E37D80',
        success: '#54B054',
        warning: '#FEEE66',
        unknown: '#D6D6D6',
      },
    },
    normalEventBg: '#333333',
    metadataBgColor: '#333',
    resourceToolTip: {
      color: 'rgba(255, 255, 255, 0.87)',
    },
    sidebarLink: {
      ...commonRules.palette.sidebarLink,
      selected: {
        color: '#FFF200',
        backgroundColor: 'unset',
      },
    },
    sidebarBg: '#000',
    notificationBorderColor: 'rgba(255,255,255,0.12)',
    type: 'dark',
    background: {
      default: '#1f1f1f',
      paper: '#1f1f1f',
    },
  },
  overrides: {
    ...commonRules.overrides,
    MuiTooltip: {
      tooltip: {
        fontSize: '1.3em',
        color: '#fff',
        backgroundColor: '#000',
        opacity: 1,
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#000',
      },
    },
    MuiIconButton: {
      colorPrimary: {
        color: '#fff',
      },
    },
    MuiLink: {
      root: {
        color: '#6CB6F2',
      },
    },
    MuiSwitch: {
      colorPrimary: {
        '&&.Mui-checked': {
          color: '#4b99ee',
        },
      },
    },
    MuiTab: {
      textColorPrimary: {
        '&&.Mui-selected': {
          color: '#fff',
          borderBottomColor: '#fff',
        },
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#fff',
      },
    },
  },
});

export interface ThemesConf {
  [themeName: string]: Theme;
}

const themesConf: ThemesConf = {
  light: lightTheme,
  dark: darkTheme,
};

export default themesConf;

export function usePrefersColorScheme() {
  if (typeof window.matchMedia !== 'function') {
    return 'light';
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const [value, setValue] = React.useState(mql.matches);

  React.useEffect(() => {
    const handler = (x: MediaQueryListEvent | MediaQueryList) => setValue(x.matches);
    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, []);

  return value;
}

type ThemeUnion = 'light' | 'dark';
/**
 * Hook gets theme based on user preference, and also OS/Browser preference.
 * @returns 'light' | 'dark' theme name
 */
export function getThemeName(): ThemeUnion {
  const themePreference: ThemeUnion = localStorage.headlampThemePreference;

  if (typeof window.matchMedia !== 'function') {
    return 'light';
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  let themeName: ThemeUnion = 'light';
  if (themePreference) {
    // A selected theme preference takes precedence.
    themeName = themePreference;
  } else {
    if (prefersLight) {
      themeName = 'light';
    } else if (prefersDark) {
      themeName = 'dark';
    }
  }
  if (!['light', 'dark'].includes(themeName)) {
    themeName = 'light';
  }

  return themeName;
}

export function setTheme(themeName: string) {
  localStorage.headlampThemePreference = themeName;
}
