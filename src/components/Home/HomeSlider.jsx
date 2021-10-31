import {React,useState,useEffect} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { SLIDES_PATH } from '../../utilities/Path';


const HomeSlider =()=>
{

    const [slides, setSlides] = useState()
    useEffect(() => {
        const fetchSlide =async ()=>
        {
            const response = await axios.get(SLIDES_PATH)
            setSlides(response.data)
        }    
        fetchSlide()
    }, [])
    var settings = {  
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(<div>
        {
            slides ?
            <Slider {...settings}>
                        {
                            slides.map( item =>(
                                <div key={item.id}>
                                    <div
                                        className="item_slider"
                                        style={{
                                            background:`url(/images/covers/${item.cover})`
                                        }}
                                    >
                                        <div className="caption">
                                            <h4>{item.topic}</h4>
                                            <p>{item.title}</p>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </Slider>  
            :null
        }
    </div>)
}

export default HomeSlider