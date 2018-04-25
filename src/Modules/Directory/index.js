import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsersWithRedux } from '../../ReduxStore/Actions'
import { AddUser, Profile, Users } from './Views'

const mapStateToProps = (state) => {
  return { session: state.session, menu: state.menu, users: state.users, view: state.view }
}


class Directory extends Component 
{
    renderModule(view) {
        switch(view) {
            case 'AddUser':
                return <AddUser/>
            case 'Profile':
                return <Profile/>
            case 'Users':
                return <Users updateActiveView={this.updateActiveView}/>
            default:
                return <Users updateActiveView={this.updateActiveView}/>
                
        }
    }

    render () {
        return (
            <div>
                {this.renderModule(this.props.view.activeView[1].View)}
            </div>
        )
    }
}


export default connect(mapStateToProps)(Directory)