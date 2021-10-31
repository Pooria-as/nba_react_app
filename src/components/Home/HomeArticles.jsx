import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { POSTS_PATH } from '../../utilities/Path';
import { Link } from 'react-router-dom';


const HomeArticles = () =>
{
    const [posts, setPosts] = useState()
    useEffect(() => {
        const fetchPosts =async ()=>
        {
            const response = await axios.get(`${POSTS_PATH}?_sort=id&_order=desc`)
            setPosts(response.data)
        } 
        fetchPosts()
    }, [])



    const ShowPost=()=>
    {
        const rows = [...Array(Math.ceil(posts.length / 3))]
        const articlesRows = rows.map(
            (row,i) => posts.slice( i * 3, i * 3 + 3)
        );

        const generatedArticles = articlesRows.map((row,i)=>(
            <div className="row" key={i}>
                {
                    row.map( article => (
                        <div key={article.id} className="four columns block_item">
                            <Link to={`/article/${article.id}`}>
                                <div className="top">
                                    <div className="veil"></div>
                                    <div
                                        className="block_image"
                                        style={{
                                            background:`url(/images/blocks/${article.image}) no-repeat`
                                        }}
                                    >
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>{article.title}</h3>
                                    <div>
                                        {article.desc}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>  
        ))

        return generatedArticles;
    
    }

    return( 
        <div className='container'>
            {
                posts ?
                ShowPost():
                null
            }
        </div>
    )
}


export default HomeArticles