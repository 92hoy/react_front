import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            
            <Router>
                <nav>
                <div className="nav-wrapper blue darken-1">
                    <a className="brand-logo center"><Link to="/">홈</Link></a>

                    <ul>
                        <li><Link to="/about">소개</Link></li>
                        <li><Link to="/users">사용자</Link></li>
                    </ul>

                    <div className="right">
                        <ul>
                            <li>
                                <a><i className="material-icons">vpn_key</i></a>
                            </li>
                            <li>
                                <a><i className="material-icons">lock_open</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="App">
               

                {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                    </Route>
                </Switch>
            </div>
        </Router>
        );
    }
}
function About() {
    return (
        <div>
            <hr />
            <h2>소개 페이지</h2>
        </div>
    );
}

function Users() {
    return (
        <div>
            <hr />
            <h2>사용자 페이지</h2>
        </div>
    );
}
export default Header;