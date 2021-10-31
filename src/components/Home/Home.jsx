import React from 'react';
import Subscribe from '../../utilities/Subscribe';
import HomeArticles from './HomeArticles';
import HomeSlider from './HomeSlider';


const Home = ()=>
{
    return (<div>
       <HomeSlider/>
       <Subscribe/>
       <HomeArticles/>
    </div>)
}

export default Home