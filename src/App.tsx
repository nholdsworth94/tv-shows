import React, { useState } from 'react';
import logo from './logo.svg';
import './app.css';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { User } from './models/user.model';
import Application from './core/components/application/Application';
import Header from './core/components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyShows from './features/my-shows/MyShows';
import AddShow from './features/add-show/AddShow';

interface AppState {
  isLoggedIn: boolean,
  checkedLogin: boolean,
  user: User | null
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      isLoggedIn: false,
      checkedLogin: false,
      user: null
    }
  }

  login = async (token: string) => {

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          token: token
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.ok) {
        this.setState((prev, props) => ({
          isLoggedIn: true
        }));
        const x = await res.json();
        this.setState({ user: x });
        console.log(x);
      } else {
        this.setState((prev, props) => ({
          isLoggedIn: false
        }));
      }

      this.setState((prev, props) => ({
        checkedLogin: true
      }));
    }
    catch (e) {

    }
  }

  handleLogin = async (googleData: GoogleLoginResponse | GoogleLoginResponseOffline) => {

    const token: string = (googleData as GoogleLoginResponse).tokenId;
    window.sessionStorage.setItem('token', token);
    await this.login(token);
  }

  componentDidMount() {

    let token: string | null = window.sessionStorage.getItem('token');

    if (token) {
      this.login(token);
    } else {
      this.setState({ checkedLogin: true });
    }
  }

  render() {

    if (!this.state.checkedLogin) {
      return <div>LOADING</div>
    } else {
      if (this.state.isLoggedIn) {
        return (
          <BrowserRouter>
            <div className='page-container'>
              <Header user={this.state.user!} />

              <Routes>
                <Route path='/' element={<MyShows />} />
                <Route path='/shows/add' element={<AddShow />} />
              </Routes>
            </div>
          </BrowserRouter>
          // <Application
          //   user={this.state.user!}
          // />
        )
      } else {
        return (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID ?? ''}
            buttonText="Log in with Google"
            onSuccess={this.handleLogin}
            onFailure={this.handleLogin}
            cookiePolicy={'single_host_origin'}
          />
        )
      }
    };
  }
}

export default App;
