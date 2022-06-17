import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        // Create Ref
        this.inputRef = React.createRef()

        // Call back Ref
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        // Call back Ref
        if (this.cbRef) {
            this.cbRef.focus()
        }

        // Create Ref
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo