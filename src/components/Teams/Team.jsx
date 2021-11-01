import axios from 'axios';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import {TEAMS_PATH} from "../../utilities/Path"
import { CSSTransition } from 'react-transition-group';




class Teams extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            teams:[],
            filterTeams:[],
            keyword:''
        }
    }

    async componentDidMount()
    {
        const res=await axios.get(`${TEAMS_PATH}`)
        this.setState({teams:res.data})
        this.setState({filterTeams:res.data})
    }
   



    searchTerm = (event) => {
        const keyword = event.target.value;
        if( keyword !== '' ){
            const list = this.state.teams.filter( item => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            });
            this.setState({
                filterTeams: list,
                keyword
            });
        } else {
            this.setState({
                filterTeams: this.state.teams,
                keyword
            });
        }

    }




















    ShowList=(filtered)=>
    {
        return (
            filtered.map((index,i) => {
                    return <CSSTransition
                    key={i}
                    timeout={5000}
                    classNames='fade'
                    >
                            <div className='team_item'>
                                <img width='50' src={`/images/teams/${index.logo}`} alt={index.name} />
                            </div>
                    </CSSTransition>
            })
        )
    }

    render() { 
        return <div className='teams_component'>

            <div className='teams_input'>
                <input
                    placeholder='search teams'
                    value={this.state.keyword}
                    onChange={e=>this.searchTerm(e)}
                />
            </div>
            <div className='container teams_container'>

            <TransitionGroup component='span'>
                {this.ShowList(this.state.filterTeams)}
            </TransitionGroup>

            </div>


        </div>
        
    }
}
 
export default Teams;