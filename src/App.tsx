import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))

const App = () => {
    return (
        <Suspense fallback='loading...'>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/'>
                    <div>404</div>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default App
