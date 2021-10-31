import React from 'react';
import axios from 'axios';
import { TEAMS_PATH } from '../../utilities/Path';

class HomeTeams extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            team:[]
        }
    }


    async componentDidMount() {
        const res=await axios.get(`${TEAMS_PATH}?poll=true&_sort=count&_order=desc`)
       this.setState({team:res.data})
        console.log(this.state.team);
    }
    
     showData = () =>
    {
        return this.state.team.map((item,i)=>
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
    

    render() { 
        return <div>
               <div className='home_poll'>
            <h4>
                Which one be champion ?😎
            </h4>
            <div className='poll_container'>
                {this.showData()}
            </div>
        </div>
        </div>;
    }
}
 
export default HomeTeams;