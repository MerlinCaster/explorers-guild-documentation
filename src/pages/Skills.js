import React from 'react';

import { Melee, Distance, Defense, Magic, }  from '../ui/Skills_tables';

function Skills() {
    return (
        <div className="mt-4">
            <h1>Skills</h1>
            <p>São treinamentos feitos pelo personagem, divididos em 4 escalas, <b>Melee</b>, <b>Distance</b>, <b>Defense</b> e <b>Magic</b></p>
            <h2>Melee Skills</h2>
            <Melee />
            <h2>Distance Skills</h2>
            <Distance />
            <h2>Defense Skills</h2>
            <Defense />
            <h2>Magic Skills</h2>
            <Magic />
        </div>
    );
}

export default Skills;
