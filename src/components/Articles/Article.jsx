import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {POSTS_PATH} from "../../utilities/Path"

const Article = (props)=>
{
    const [post, setPost] = useState()
    useEffect(() => {
        
        const GetArticle = async () =>
        {
            const res= await axios.get(`${POSTS_PATH}/${props.match.params.id}`)
           setPost(res.data)
          

        }
        GetArticle()

    }, [props])


 

    return (
        <div className='container'>

        <div className='container article_post'>
        {
            post ?

            <div className='top'>
                <div
                className='block_image'
                style={{
                    background:`url(/images/blocks/${post.image})`
                }}
                
                >
                </div>
                <h1>
                    {post.title}
                </h1>
                <span></span>
                <div
                className='article_content'
                dangerouslySetInnerHTML={{
                    __html : post.content
                }}
                >
                </div>
            </div>

            :
            <div className='alert alert-danger'>
                    not found post
            </div>
        }
        </div>

        </div>
    )
}


export default Article