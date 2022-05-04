import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Con101 from './Con101';
import Con102 from './Con102';
import Con103 from './Con103';
import Con104 from './Con104';
import Con105 from './Con105';
import Con201 from './Con201';
import Con202 from './Con202';
import Con203 from './Con203';
import Con204 from './Con204';
import Con205 from './Con205';
import Con301 from './Con301';
import Con302 from './Con302';
import Con304 from './Con304';
import Con305 from './Con305';
import Con401 from './Con401';
import Con402 from './Con402';
import Con403 from './Con403';
import Con404 from './Con404';
import Con405 from './Con405';
import Con501 from './Con501';
import Con502 from './Con502';
import Con503 from './Con503';
import Con504 from './Con504';

const PageContent = () => {
  return (
    <>
        <Switch>
            <Route path="/con101" exact>
                <Con101 />
            </Route>
            <Route path="/con102" exact>
                <Con102 />
            </Route>
            <Route path="/con103" exact>
                <Con103 />
            </Route>
            <Route path="/con104" exact>
                <Con104 />
            </Route>
            <Route path="/con105" exact>
                <Con105 />
            </Route>
            <Route path="/con201" exact>
                <Con201 />
            </Route>
            <Route path="/con202" exact>
                <Con202 />
            </Route>
            <Route path="/con203" exact>
                <Con203 />
            </Route>
            <Route path="/con204" exact>
                <Con204 />
            </Route>
            <Route path="/con205" exact>
                <Con205 />
            </Route>
            <Route path="/con301" exact>
                <Con301 />
            </Route>
            <Route path="/con302" exact>
                <Con302 />
            </Route>
            <Route path="/con304" exact>
                <Con304 />
            </Route>
            <Route path="/con305" exact>
                <Con305 />
            </Route>
            <Route path="/con401" exact>
                <Con401 />
            </Route>
            <Route path="/con402" exact>
                <Con402 />
            </Route>
            <Route path="/con403" exact>
                <Con403 />
            </Route>
            <Route path="/con404" exact>
                <Con404 />
            </Route>
            <Route path="/con405" exact>
                <Con405 />
            </Route>
            <Route path="/con501" exact>
                <Con501 />
            </Route>
            <Route path="/con502" exact>
                <Con502 />
            </Route>
            <Route path="/con503" exact>
                <Con503 />
            </Route>
            <Route path="/con504" exact>
                <Con504 />
            </Route>
        </Switch>
    </>
  )
}

export default PageContent