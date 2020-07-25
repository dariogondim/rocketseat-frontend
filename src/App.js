import React from 'react'

import Header from './components/Header'


//componente é uma função que retorna HTML,tudo no React é um componente
/*no retorno do componente sempre deve retornar uma unica tag.Se deseja
retornar duas tags sequencias,elas devem estar encapsuladas por uma tag.
Para resolver o problema,você pode criar um fragment,que nada mais é que um
tag vazia envolvendo os elementos
*/
function App() {
    return (
        <>
            <Header />
            <Header />
        </>
    )
}

export default App