import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Footer, Header } from './components'
import { Loader } from './components'

const About = React.lazy(() => import('./pages/About'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Error = React.lazy(() => import('./pages/Error'))
const Home = React.lazy(() => import('./pages/Home'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))

const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            <div className='main'>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/portfolio'>
                        <Portfolio />
                    </Route>
                    <Route exact path='/about'>
                        <About />
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
