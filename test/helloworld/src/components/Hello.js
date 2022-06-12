import React from 'react'

const Hello = () => {
    // ------with JSX-------
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Peachy</h1>
    //     </div>
    // )

    // without JSX
    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello world'))
}

export default Hello