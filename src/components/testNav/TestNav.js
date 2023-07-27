

import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import './TestNav.css';
import { useAuth0 } from '@auth0/auth0-react'
import logo from './logoo.png'
export default function TestNav() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    console.log(user);
    if (isAuthenticated) {
        checkuser();
    }
    async function checkuser() {
        console.log(user.sub);
        try {
            await fetch(`${process.env.REACT_APP_Google_URL}user`, {
                method: 'POST',
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    id: user.sub
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    const items = [
        {
            url: '/',
            icon: <img src={logo} style={{ pointerEvents: 'none'}}  alt="Logo" className="navbar-logo"/>
            
        },
        {
            label: 'Home',
            url: '/',
            icon: 'pi pi-fw pi-home',
        },
        {
            label: 'Library',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Fav Books',
                    url: '/favBooks',
                    icon: 'pi pi-bookmark-fill',
                },
                {
                    label: 'Current Books',
                    url: '/current',
                    icon: 'pi pi-book',
                },
                {
                    label: 'Finished Books',
                    url: '/finishedBooks',
                    icon: 'pi pi-book',
                },
            ],
        },
        {
            label: 'Qoutes',
            url: '/qoutes',
            icon: 'pi pi-hashtag',
        },
        {
            label: 'Cart',
            url: '/cart',
            icon: 'pi pi-shopping-cart',
        },
        {
            label: 'About Us',
            url: '/aboutUs',
            icon: 'pi pi-users',
        },
    ];
    const buttonStyle = {
        fontSize: '16px',
        padding: '0.5rem 1rem',
        color: 'rgb(63, 35, 5)',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#00ABB3',
    };

    const end = (
        user ? <Button icon="pi pi-sign-out" onClick={() => logout()} label="Logout" style={buttonStyle}></Button> : <Button onClick={() => loginWithRedirect()} label="LogIn" icon="pi pi-sign-in" style={buttonStyle} />
    );
    return (
        <>
            <div className="navbar-container">
                <Menubar
                    className='gg'
                    model={items}
                    end={end}
                />
            </div>
        </>
    );
};



