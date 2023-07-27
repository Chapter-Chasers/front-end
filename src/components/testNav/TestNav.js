import React, { useState }  from 'react'; 
import { Menubar } from 'primereact/menubar';
import './TestNav.css'

export default function TestNav() {
    
    const items = [
        {
            label: 'Chapter Chasers',
            url: '/',
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
            ]
        },
        {
            label: 'Qoutes',
            url: '/qoutes',
            icon: 'pi pi-hashtag'
        },
        {
            label: 'Cart',
            url: '/cart',
            icon: 'pi pi-shopping-cart'
        },
        {
            label: 'About Us',
            url: '/aboutUs',
            icon: 'pi pi-users'
        }
    ];

    return (
        <>
          <div>
            <Menubar model={items} />
        </div>
        </>
    )
}
        