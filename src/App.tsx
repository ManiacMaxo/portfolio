import { Center } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Footer, Header } from './components'

const Home = React.lazy(() => import('./pages/Home'))
const Error = React.lazy(() => import('./pages/Error'))

const App = () => {
    return (
        <Suspense
            fallback={
                <Center>
                    <Spinner>Loading</Spinner>
                </Center>
            }
        >
            <Header />
            <div className='main'>
                <Switch>
                    <Route exact path='/'>
                        <Home />
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
