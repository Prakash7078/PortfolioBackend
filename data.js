import bcrypt from 'bcryptjs';
const data={
    users:[
        {
            name:'Prakash',
            email:'ponduriprakash7078@gmail.com',
            password:bcrypt.hashSync('admin'),
            isAdmin:true,
        },
        {
            name:'Surya',
            email:'suryaprakash7078@gmail.com',
            password:bcrypt.hashSync('anu'),
            isAdmin:false,
        },
    ],
    hobies:[
        {
            id:1,
            image:"/Hobies/araku.jpeg",
            desc:"Araku",
        },
        {
            id:2,
            image:"/Hobies/araku2.jpeg",
            desc:"Kailasgiri",
        },
        {
            id:3,
            image:"/Hobies/image2.jpeg",
            desc:"Araku Gardens",
        },
        {
            id:4,
            image:"/Hobies/frds.jpeg",
            desc:"VVIT",
        },
        {
            id:5,
            image:"/Hobies/google.jpg",
            desc:"VVIT",
        },
        {
            id:6,
            image:"/Hobies/image1.jpg",
            desc:"Rishikonda",
        },
        {
            id:7,
            image:"/Hobies/image3.jpeg",
            desc:"RK Beach",
        },
        {
            id:8,
            image:"/Hobies/image4.jpeg",
            desc:"Araku",
        },
        {
            id:9,
            image:"/Hobies/image6.jpeg",
            desc:"Borra Caves",
        },
    ],
    others:[
        {
            id:1,
            image:"/Others/NSS1.jpeg",
            desc:"Social Service"
        },
        {
            id:1,
            image:"/Others/NSS2.jpeg",
            desc:"Team Lead"
        }
    ],
    
};
export default data;