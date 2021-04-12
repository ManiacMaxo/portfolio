import { Center } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/spinner'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Footer, Header } from './components'

const Home = React.lazy(() => import('./pages/Home'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Error = React.lazy(() => import('./pages/Error'))

const App = () => {
    return (
        <Suspense
            fallback={
                <Center paddingTop='300px' minHeight='inherit'>
                    <Spinner size='lg' />
                </Center>
            }
        >
            <Header />
            <div className='main'>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/'>
                        <Error code={404} />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Suspense>
    )
}

export default App
