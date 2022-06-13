import React from "react"

// function Greet() {
//     return <h1>Hello Peach!</h1>
// }

// arrow func
const Greet = props => {
    // console.log(props)
    const { name, heroName } = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}!</h1>
            {/* {props.children} */}
        </div>

    )
}

export default Greet