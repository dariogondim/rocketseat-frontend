import React, { useState } from 'react'

import './App.css'

import backgroundImage from './assets/computers.jpeg'

import Header from './components/Header'


//componente é uma função que retorna HTML,tudo no React é um componente
/*no retorno do componente sempre deve retornar uma unica tag.Se deseja
retornar duas tags sequencias,elas devem estar encapsuladas por uma tag.
Para resolver o problema,você pode criar um fragment,que nada mais é que um
tag vazia envolvendo os elementos
*/
function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Fron-end web'])


    function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`)

        setProjects([...projects, `Novo projeto ${Date.now()}`])

        console.log(projects)
    }

    return (
        <>
            <Header title="Projects" />

            <img width={300} src={backgroundImage} />
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App