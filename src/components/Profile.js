import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        console.log('Como estas');
        let nombre = 'Susana'
        return (
            <div>
                <h2>{`Este es un componente de clase ${nombre}`}</h2>
            </div>
        )
    }
}