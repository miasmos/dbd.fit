import React from 'react'
import Intro from './Intro'
import TypeSelector from './TypeSelector'
import PlayerSelector from './PlayerSelector'
import { Enum } from '../data'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            entered: false,
            typeSelected: false,
            type: undefined,
            playerData: undefined
        }
        this.bound = {
            onEnter: this.onEnter.bind(this),
            onKillerSelected: this.onKillerSelected.bind(this),
            onSurvivorSelected: this.onSurvivorSelected.bind(this)
        }
    }

    render() {
        return (
            <div className="app" onClick={this.bound.onEnter}>
                <Intro entered={this.state.entered} />
                <TypeSelector entered={this.state.entered} typeSelected={this.state.typeSelected} onKillerSelected={this.bound.onKillerSelected} onSurvivorSelected={this.bound.onSurvivorSelected} />
                <PlayerSelector typeSelected={this.state.typeSelected} type={this.state.type} />
            </div>
        )
    }

    onEnter() {
        this.setState({
            entered: true
        })
        this.bound.onEnter = undefined
    }

    onKillerSelected() {
        this.setState({
            typeSelected: true,
            type: Enum.Types.KILLER
        })
        this.bound.onKillerSelected = undefined
        this.bound.onSurvivorSelected = undefined
    }

    onSurvivorSelected() {
        this.setState({
            typeSelected: true,
            type: Enum.Types.SURVIVOR
        })
        this.bound.onKillerSelected = undefined
        this.bound.onSurvivorSelected = undefined
    }
}
