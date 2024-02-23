import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAppDispatch } from '../store/configureStore'
import { fetchBasketAsync } from '../../features/basket/basketSlice'
import { fetchCurrentUser } from '../../features/account/accountSlice'
import Header from '../layout/Header'
import LoadingComponent from '../layout/LoadingComponent.tsx'

function App() {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)

    const initApp = useCallback(async () => {
        try {
            await dispatch(fetchCurrentUser())
            await dispatch(fetchBasketAsync())
        } catch (error) {
            console.log(error)
        }
    }, [dispatch])

    useEffect(() => {
        initApp().then(() => setLoading(false))
    }, [initApp])

    const [darkMode, setDarkMode] = useState(false)
    const palleteType = darkMode ? 'dark' : 'light'
    const theme = createTheme({
        palette: {
            mode: palleteType,
            background: {
                default: (palleteType === 'light') ? '#eaeaea' : '#121212',
            },
        },
    })

    function handleThemeChange() {
        setDarkMode(!darkMode)
    }

    if (loading) return <LoadingComponent message='Initiasing app...' />

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
            <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
            <Container>
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}

export default App
