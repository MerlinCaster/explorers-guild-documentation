import React, { Component } from "react";

import Club from '../img/club.svg'
import Sword from '../img/sword.svg'
import Axe from '../img/axe.svg'
import Spear from '../img/spear.svg'
import Dagger from '../img/dagger.svg'

import Crossbow from '../img/crossbow.svg'
import Bow from '../img/bow.svg'
import Throw from '../img/throw.svg'

import Buckler from '../img/buckler.svg'
import Shield from '../img/shield.svg'
import Tower from '../img/tower.svg'

import Fire from '../img/fire.svg'
import Ice from '../img/ice.svg'
import Energy from '../img/energy.svg'
import Plague from '../img/plague.svg'
import Dark from '../img/dark.svg'
import Holy from '../img/holy.svg'


class Melee extends Component {
    render() {
        let icon_th_width = {
            width: '20px'
        };
        let icon_padding = {
            padding: "0rem"
        }
        return (
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th style={icon_th_width}>Icon</th>
                        <th>Nome</th>
                        <th>Lvl 20</th>
                        <th>Lvl 50</th>
                        <th>Lvl 80</th>
                        <th>Lvl 120</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={icon_padding}><img alt="sword logo" width="64" src={Sword}/></td>
                        <td>Sword Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="axe logo" width="64" src={Axe}/></td>
                        <td>Axe Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="club logo" width="64" src={Club}/></td>
                        <td>Club Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Spear logo" width="64" src={Spear}/></td>
                        <td>Spear Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Dagger logo" width="64" src={Dagger}/></td>
                        <td>Dagger Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                </tbody>
            </table>
        );
    };
    
}

class Distance extends Component {
    render() {
        let icon_th_width = {
            width: '20px'
        };
        let icon_padding = {
            padding: "0rem"
        }
        return (
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th style={icon_th_width}>Icon</th>
                        <th>Nome</th>
                        <th>Lvl 20</th>
                        <th>Lvl 50</th>
                        <th>Lvl 80</th>
                        <th>Lvl 120</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={icon_padding}><img alt="Bow logo" width="64" src={Bow}/></td>
                        <td>Bow Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Crossbow logo" width="64" src={Crossbow}/></td>
                        <td>Crossbow Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Throw logo" width="64" src={Throw}/></td>
                        <td>Throw Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}


class Defense extends Component {
    render() {
        let icon_th_width = {
            width: '20px'
        };
        let icon_padding = {
            padding: "0rem"
        }
        return (
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th style={icon_th_width}>Icon</th>
                        <th>Nome</th>
                        <th>Lvl 20</th>
                        <th>Lvl 50</th>
                        <th>Lvl 80</th>
                        <th>Lvl 120</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={icon_padding}><img alt="Buckler logo" width="64" src={Buckler}/></td>
                        <td>Buckler Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Shield logo" width="64" src={Shield}/></td>
                        <td>Shield Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Tower logo" width="64" src={Tower}/></td>
                        <td>Tower Fighting</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}


class Magic extends Component {
    render() {
        let icon_th_width = {
            width: '20px'
        };
        let icon_padding = {
            padding: "0rem"
        }
        return (
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th style={icon_th_width}>Icon</th>
                        <th>Nome</th>
                        <th>Lvl 20</th>
                        <th>Lvl 50</th>
                        <th>Lvl 80</th>
                        <th>Lvl 120</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={icon_padding}><img alt="Fire logo" width="64" src={Fire}/></td>
                        <td>Fire Magic</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Ice logo" width="64" src={Ice}/></td>
                        <td>Ice Magic</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Energy logo" width="64" src={Energy}/></td>
                        <td>Energy Magic</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Plague logo" width="64" src={Plague}/></td>
                        <td>Plague Magic</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Dark logo" width="64" src={Dark}/></td>
                        <td>Dark Magic</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                    <tr>
                        <td style={icon_padding}><img alt="Holy logo" width="64" src={Holy}/></td>
                        <td>Holy Magic</td>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export { Melee, Distance, Defense, Magic };
