import { createTheme } from '@mui/material/styles';
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'], display: 'swap', fallback: ['Roboto'] })

export const Theme = createTheme({
    components: {
        MuiInputBase: {
            // defaultProps: {
            //     size: 'small'
            // },
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    "& > fieldset": { borderColor: theme.palette.primary.main, },
                    ":hover": {
                        "& > fieldset": { borderColor: `${theme.palette.primary.main} !important`, boxShadow: '0px 0px 8px #1E2F9739' },
                    },
                }),
                input: ({ theme }) => theme.unstable_sx({
                    color: `${theme.palette.primary.dark} !important`
                })
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    color: `${theme.palette.primary.dark} !important`
                }),
            }
        },
        MuiCircularProgress: {
            styleOverrides: {
                svg: ({ theme }) => theme.unstable_sx({
                    transform: 'scale(1.4)'
                }),
            }
        },

        // MuiSelect: {
        //     styleOverrides: {
        //         select: ({ theme }) => theme.unstable_sx({
        //             paddingBottom: '0px'
        //         }),
        //     }
        // },
        MuiFormLabel: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    color: `${theme.palette.primary.dark}`,
                    fontSize: '16px !important',
                }),
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: ({ theme }) => theme.unstable_sx({
                    marginTop: '4px', border: `1px solid ${theme.palette.primary.main}`
                }),
                listbox: ({ theme }) => theme.unstable_sx({
                    color: `${theme.palette.primary.dark} !important`
                }),
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: ({ theme }) => theme.unstable_sx({
                    marginTop: '4px', border: `1px solid ${theme.palette.primary.main}`,
                }),

            }
        },
        MuiButton: {
            defaultProps: {
                size: 'medium'
            },
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    fontWeight: 500
                }),
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    color: theme.palette.primary.main,
                })
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    backgroundColor: '#fff !important',
                    margin: 0,
                    px: .5,
                    pt: .25
                })
            }
        }
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        body1: {
            lineHeight: '20px',
            fontWeight: 300
        },
        caption: {
            lineHeight: '14px'
        },
        h6: {
            lineHeight: '24px'
        },
        h1: {
            fontSize: '50px'
        },
        subtitle1: {
            fontWeight: 300
        }

    },
    palette: {
        background: {
            default: "#f5f5f5"
        },
        primary: {
            light: '#3B75AF',
            main: '#205992',
            dark: '#05386B',
            contrastText: '#fff',
            // 400: '#205992f2',
            // 500: '#20599280'
        },
        secondary: {
            main: '#5CDB95',
            dark: '#379683',
        },
        info: {
            main: '#fff'
        },
        grey: {
            100: '#F5F5F5',
            200: '#E6E6E6',
            400: '#464853',
            500: '#090909',
        },
        error: {
            main: '#d32f2f'
        }
    }
})



export const getTheme = () => {
    return Theme
}
