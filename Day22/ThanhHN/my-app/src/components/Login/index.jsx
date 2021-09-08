import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {

    const [inputValue,setInputValue] = useState({emailLo: '',passwordLo: ''});

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        
        const newInputValue = {
            ...inputValue,
            [key]: value
        }
        
        setInputValue(newInputValue);
    }

    return (
        <div className="layout sign__in">
        <div className="header header--signIn">
            <img className="header__banner" src="images/loginBanner.png" alt="login banner" />

            <div className="header__text">
                <h4 className="header__title">
                    Welcome Back!
                </h4>
                <h2 className="header__content">
                    Please, Log In.
                </h2>
            </div>
        </div>

        <form className="form">
            <div className="form__input">
                <svg className="icon__input" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.38623 7.92432C9.21729 7.92432 10.6748 6.34229 10.6748 4.36475C10.6748 2.4458 9.20264 0.885742 7.38623 0.885742C5.58447 0.885742 4.09766 2.46045 4.10498 4.37207C4.1123 6.34229 5.5625 7.92432 7.38623 7.92432ZM7.38623 6.33496C6.48535 6.33496 5.73096 5.48535 5.73096 4.37207C5.72363 3.31006 6.49268 2.4751 7.38623 2.4751C8.29443 2.4751 9.04883 3.30273 9.04883 4.36475C9.04883 5.47803 8.30176 6.33496 7.38623 6.33496ZM2.88916 14.7944H11.8906C13.2383 14.7944 13.9048 14.333 13.9048 13.3662C13.9048 11.1836 11.2241 8.67139 7.38623 8.67139C3.54834 8.67139 0.867676 11.1836 0.867676 13.3662C0.867676 14.333 1.53418 14.7944 2.88916 14.7944ZM2.87451 13.2051C2.73535 13.2051 2.68408 13.1465 2.68408 13.0439C2.68408 12.0771 4.40527 10.2607 7.38623 10.2607C10.3672 10.2607 12.0884 12.0771 12.0884 13.0439C12.0884 13.1465 12.0444 13.2051 11.8979 13.2051H2.87451Z" fill="#3C3C43"/>
                </svg>
                    
                <input name="emailLo" type="email" placeholder="Username" defaultValue="johnsondoe@nomail.com" onChange={handleChange}/>
            </div>

            <div className="form__input form__input--password">
                <svg className="icon__input" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.3208 18.7354C5.72363 19.0796 6.26562 19.1162 6.63916 18.7427L8.90234 16.4868C9.26855 16.1133 9.26123 15.5347 8.8877 15.1685L7.91357 14.187L9.41504 12.6855C9.77393 12.3193 9.77393 11.7407 9.40771 11.3672L8.08203 10.0415C10.0156 9.01611 11.0923 7.36084 11.0923 5.42725C11.0923 2.60742 8.81445 0.32959 5.97998 0.32959C3.13818 0.32959 0.867676 2.6001 0.867676 5.42725C0.867676 7.41943 1.98828 9.20654 3.77539 10.0562V16.853C3.77539 17.146 3.87061 17.4902 4.12695 17.71L5.3208 18.7354ZM5.97998 17.168L5.21094 16.4062V8.88428C3.63623 8.56201 2.43506 7.14111 2.43506 5.42725C2.43506 3.479 4.01709 1.9043 5.97998 1.9043C7.93555 1.9043 9.51025 3.479 9.51025 5.42725C9.51025 7.12646 8.30176 8.56934 6.49268 8.9209V10.686L7.83301 12.041L6.43408 13.418V14.9414L7.32031 15.813L5.97998 17.168ZM5.97998 5.41992C6.66846 5.41992 7.2251 4.85596 7.2251 4.1748C7.2251 3.48633 6.66846 2.92969 5.97998 2.92969C5.28418 2.92969 4.73486 3.479 4.73486 4.1748C4.73486 4.85596 5.2915 5.41992 5.97998 5.41992Z" fill="#3C3C43"/>
                </svg> 
                <input name="passwordLo" type="password" placeholder="Password" defaultValue="helloWorld" onChange={handleChange}/>
            </div>


            <div className="form__btn btn__signIn--top ">
                <button type="submit" className="continue__wrapper">       
                    <span>Continue</span>
                    <svg className="nextIcon bi bi-chevron-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>

            <div className="form__title">
                <span>Or</span>
            </div>

            <div className="form__btn btn__link">
                <Link to="/register">Create an Account</Link>
            </div>
        </form>
    </div>
    );
}
