import {React,useState,useEffect} from 'react';
import axios from 'axios';
import { TEAMS_PATH } from '../../utilities/Path';
const HomeTeams = ()=>
{

    const [team, setTeam] = useState()

    useEffect(() => {
        const fetchTeam = async()=>
        {
            const res=await axios.get(`${TEAMS_PATH}?poll=true&_sort=count&_order=desc`)
            setTeam(res.data)
        }
        fetchTeam()
    },[])

    const showData = () =>
    {
        return team.map((item,i)=>
        {
            return (
                <div
                key={i} 
                className='poll_item'>
                <img src={`/images/teams/${item.logo}`} alt={item.name} />
                <div>
                  Score : {item.count}
                </div>
                </div> 
            )
        })
    }

    return(
        <>
        <div className='home_poll'>
            <h4>
                Which one be champion ?😎
            </h4>
            <div className='poll_container'>
                {showData()}
            </div>
        </div>
        </>
    )
}
export default HomeTeams