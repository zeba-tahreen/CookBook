import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import style from "styled-components";
import {Layout} from '../../components/style/Style';

const images = [
    "https://jameskennedyphotography.com/wp-content/uploads/2014/12/JKP_3762.jpg",
    "https://777705.smushcdn.com/1451064/wp-content/uploads/2019/08/food-photography-styling-setup-pasta.jpg?size=1200x674&lossy=1&strip=1&webp=1",
    "https://steemitimages.com/DQmXTgz6S9jHXPDbcdTMLABwdcEfKpb9gtTyUgYXgr2Di8n/Chilli%202_noborder.png",
    "http://silverstone.media/wp-content/uploads/2018/11/Food-Photography-11.jpg",
    "https://iso.500px.com/wp-content/uploads/2016/07/stock-photo-157432243.jpg"
];

function Main() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (index === 4) {
                setIndex(0);
            } else {
                setIndex(prev => prev + 1);
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <>
        <Layout>
            <Gallery
                style={{
                    background: "white",
                    height: "100vh",
                    width: "80vw",
                    marginRight: "10px"
                }}
                index={index}
                onRequestChange={i => {
                    setIndex(i);
                }}
            >
                {images.map(image => (
                    <GalleryImage objectFit="contain" key={image} src={image} />
                ))}
            </Gallery>
            <Wrapper>
                <div className="content">
                    <h1 className="heading">Whats Cook Book</h1>
                    <hr className="styleone"></hr>
                    <p>'Chef' doesn't mean that you're the best cook, it simply means
                    'boss.' Cooking is not difficult. Everyone has taste, even if they
                    don't realize it. Even if you're not a great chef, there's nothing
                    to stop you understanding the difference between what tastes good
                    and what doesn't.</p>
                    <h5 className="heading">By Google</h5>
                    <hr className="styleone"></hr>
                    <p className="about">
                    Cookbook is a platform where any food lover can meet some self-made chef's. 
                    Anybody like me who is a food lover and get appreciate 
                    for the food you make, as well as get requests for the recipe every single time "CookBook"
                    is for you. Post your recipe once and forward the link to people or just tell them
                    check out my recipe on cook book. Simple and stylish right...!!!

                    Well you must be thinking CookBook is for people who cook, nope you are not right.
                    CookBook is also for people who want some simple recipes to cook that are posted by 
                    people who really actually made it. Buying recipe book or searching what to cook is 
                    time consuming... CookBook is one stop for every cooking solution.</p>
                    <h5 className="authorName">Zeba</h5>
                    <h6 className="cbAuthor"> Founder of CookBook</h6>
                </div>

            </Wrapper>
            </Layout>
        </>
    );
}

export default Main;

const Wrapper = style.div`
.content {
positon: absolute;
margin-top: 8%;
margin-right:auto;
margin-left:auto;
margin-bottom: 20%;

color:white;
background-image: linear-gradient(rgb(199, 164, 8), white);

padding-right:10px;
paddignt-left:10px;
padding:10%;
text-align: center;
}
.about, .authorName, .cbAuthor{
    color:rgb(199, 164, 8);
    text-align:right;
    font-weight: bolder;
}

.heading {
text-align:center;
color:white;
font-family: 'Liu Jian Mao Cao', cursive;
}
.authorName, .cbAuthor{
    font-family: 'Liu Jian Mao Cao', cursive;
}
hr.styleone {
    border: 0;
    height: 1px;
    background: #333;
    background-image: -webkit-linear-gradient(left, #ccc, rgb(199, 164, 8), #ccc);
    background-image: -moz-linear-gradient(left, #ccc, #333, #ccc);
    background-image: -ms-linear-gradient(left, #ccc, #333, #ccc);
    background-image: -o-linear-gradient(left, #ccc, #333, #ccc);
    }

`
