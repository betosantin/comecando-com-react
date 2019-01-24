import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router'

export default class Home extends Component {

    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => hashHistory.push('/releases')
    }

    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => hashHistory.push('/backlog')
    }

    homeCardSprint = {
        title: 'Sprint',
        text: 'Manage Sprint',
        action: () => hashHistory.push('/sprints')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardReleases}/>
                    <HomeCard {...this.homeCardBacklog}/>
                    <HomeCard {...this.homeCardSprint}/>
                </div>
            </div>
        );
    };
}