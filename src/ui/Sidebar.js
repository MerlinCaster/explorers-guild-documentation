import React, { Component } from 'react';

import '../style/sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div class="sidenav">
                <a href="/">Resumo</a>
                <a href="#services">Classes</a>
                <a href="/skills">Skills</a>
                <a href="#contact">Spells</a>
                <a href="#contact">Items</a>
                <a href="#contact">Monsters</a>
                <a href="#contact">Map</a>
                <a href="#contact">Sistemas</a>
            </div>
        )
    }
}
export default Sidebar; 