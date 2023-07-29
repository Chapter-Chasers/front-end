import React, { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import './TestNav.css';
import { useAuth0 } from '@auth0/auth0-react'
import logoFive from './logo 5.png'

export default function TestNav() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    console.log(user);
    if (isAuthenticated) {
        checkuser();
    }
    const saveUserIdToSessionStorage = () => {
        if (user && user.sub) {
            sessionStorage.setItem("userId", user.sub);
        }
    };
    const handleLogOut = () => {
        sessionStorage.clear();
        localStorage.clear();
        logout();
    }
    useEffect(() => {
        saveUserIdToSessionStorage();
    }, [user]);
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
            label: 'Quotes',
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
        user ? <Button icon="pi pi-sign-out" onClick={() => handleLogOut()} label="Logout" style={buttonStyle}></Button> : <Button onClick={() => loginWithRedirect()} label="LogIn" icon="pi pi-sign-in" style={buttonStyle} />
    );
    return (
        <>
            <div className="navbar-container">
                <Menubar
                    className='gg'
                    model={items}
                    start={<img src={logoFive} alt="Logo" className="navbar-logo" style={{ width: '150px', height: '65px', marginRight: '50px', marginLeft: '30px' }} />}
                    end={end}
                />
            </div>
        </>
    );
};



