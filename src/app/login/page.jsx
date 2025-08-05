import React from 'react'
import Link from 'next/link'

const Login = () => {
    return (
        <div className="login-section ptb-100 login-bg">
            <div className="container">
                <div className="row login-content g-0">
                    <div className="col-lg-8">
                        <div className="log-img login-bg" />
                    </div>
                    <div className="col-lg-4">
                        <div className="accounts-from">
                            <Link href="/" className="logo">Aithm</Link>
                            <p>Login with</p>
                            <div className="sign-up-with">
                                <div className="apple"><a className="s-btn" href="https://appleid.apple.com/sign-in"><i className="bx bxl-apple" /> Apple</a></div>
                                <div className="google"><a className="s-btn" href="https://accounts.google.com/"><i className="bx bxl-google" /> Google</a></div>
                                <div className="microsoft"><a className="s-btn" href="https://login.microsoftonline.com/"><i className="bx bxl-microsoft" /> Microsoft</a></div>
                            </div>
                            <span>OR</span>
                            <form>
                                <div className="login-from">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="aithm@.com" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" className="form-control" />
                                    </div>
                                </div>
                                <Link className="pass-btn" href="/">Forgot your password?</Link>
                                <button type="submit" className="default-btn"><i className="bx bx-chevron-right" /> <span>Sign in</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login