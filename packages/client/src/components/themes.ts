export const darkTheme = {
    palette: {
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#425564',
        },
        type: 'dark',
    },
};

export const lightTheme = {
    palette: {
        secondary: {
            light: '#5f5fc4',
            main: '#1e84d4',
            dark: '#001064',
            contrastText: '#fff',
        },
    },
    overrides: {
        MuiFilledInput: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                '&$disabled': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
            },
        },
    },
};
