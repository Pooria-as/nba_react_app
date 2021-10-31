import React from 'react';
import Subscribe from '../../utilities/Subscribe';
import HomeArticles from './HomeArticles';
import HomeSlider from './HomeSlider';
import HomeTeams from './HomeTeams';


const Home = ()=>
{
    return (<div>
       <HomeSlider/>
       <Subscribe/>
       <HomeArticles/>
       <HomeTeams/>
    </div>)
}

export default Home