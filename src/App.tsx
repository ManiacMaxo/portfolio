import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Footer, Header } from './components'

const Home = React.lazy(() => import('./pages/Home'))

const App = () => {
    return (
        <Suspense fallback='loading...'>
            <Header />
            <div className='main'>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/'>
                        <div>404</div>
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Suspense>
    )
}

export default App
