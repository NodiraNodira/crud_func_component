import { ReactComponent as home } from "../assets/icons/burger.svg";
import styled  from "styled-components";
const Icons =styled.div``;

Icons.Home =styled(home)`
width:16px;
height:16px;
`;

export const sidebar =[
    {
        id:1,
        data:[
            {id:1, title: 'Home', icon: Icons.Home,},
            {id:2, title: 'Explore', icon: Icons.Home,},
            {id:3, title: 'Subcription', icon: Icons.Home,},
        ],
    },

    {
        id:2,
        data:[
            {id:1, title: 'Home', icon: Icons.Home,},
            {id:2, title: 'Home', icon: Icons.Home,},
            {id:3, title: 'Home', icon: Icons.Home,},
            {id:4, title: 'Home', icon: Icons.Home,},
            {id:5, title: 'Home', icon: Icons.Home,},
            {id:6, title: 'Home', icon: Icons.Home,},
        ],
    },

    {
        id:3,
        title:'Subscriptions',
        data:[
            {id:1, title: 'Home', icon: Icons.Home,},
            {id:2, title: 'Home', icon: Icons.Home,},
            {id:3, title: 'Home', icon: Icons.Home,},
            {id:4, title: 'Home', icon: Icons.Home,},
            {id:5, title: 'Home', icon: Icons.Home,},
            {id:6, title: 'Home', icon: Icons.Home,},
            {id:7, title: 'Home', icon: Icons.Home,},
            {id:8, title: 'Home', icon: Icons.Home,},
        ],
    },

    {
        id:4,
        title:'More From YouTube',
        data:[
            {id:1, title: 'Home', icon: Icons.Home,},
            {id:2, title: 'Home', icon: Icons.Home,},
            {id:3, title: 'Home', icon: Icons.Home,},
            {id:4, title: 'Home', icon: Icons.Home,},
            {id:5, title: 'Home', icon: Icons.Home,},
            {id:6, title: 'Home', icon: Icons.Home,},
            {id:7, title: 'Home', icon: Icons.Home,},
            {id:8, title: 'Home', icon: Icons.Home,},
        ],
    },
];