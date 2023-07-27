// import React from 'react';
// import { Menubar } from 'primereact/menubar';
// import { Button } from 'primereact/button';
// import './TestNav.css';

// export default function TestNav() {
//   const items = [
//     {
//       label: 'Chapter Chasers',
//       url: '/',
//     },
//     {
//       label: 'Home',
//       url: '/',
//       icon: 'pi pi-fw pi-home',
//     },
//     {
//       label: 'Library',
//       icon: 'pi pi-fw pi-pencil',
//       items: [
//         {
//           label: 'Fav Books',
//           url: '/favBooks',
//           icon: 'pi pi-bookmark-fill',
//         },
//         {
//           label: 'Current Books',
//           url: '/current',
//           icon: 'pi pi-book',
//         },
//         {
//           label: 'Finished Books',
//           url: '/finishedBooks',
//           icon: 'pi pi-book',
//         },
//       ],
//     },
//     {
//       label: 'Qoutes',
//       url: '/qoutes',
//       icon: 'pi pi-hashtag',
//     },
//     {
//       label: 'Cart',
//       url: '/cart',
//       icon: 'pi pi-shopping-cart',
//     },
//     {
//       label: 'About Us',
//       url: '/aboutUs',
//       icon: 'pi pi-users',
//     },
//   ];

//   const buttonStyle = {
//     fontSize: '16px',
//     padding: '0.5rem 1rem',
//     color: 'rgb(63, 35, 5)',
//     backgroundColor: 'transparent',
//     border: 'none',
//   };

//   const end = (
//     <Button label="LogIn" icon="pi pi-sign-in" style={buttonStyle} />
//   );

//   return (
//     <>
//       {/* <div style={{color:'red'}}> */}
//         <Menubar model={items} end={end} style={{color:'red'}}/>
//       {/* </div> */}
//     </>
//   );
// }


// ===========================


import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import './TestNav.css';

export default function TestNav() {

    const [activeIndex, setActiveIndex] = useState(0);
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
        <Button label="LogIn" icon="pi pi-sign-in" style={buttonStyle} />
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



