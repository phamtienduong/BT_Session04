import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }
    saveInfo = (e) => {
        console.log(e.target.value);
        e.preventDefault()
    }
    changeValue = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value,
        })
    }
    render() {
        console.log(this.state);
        return (
            <>
                <form action="#">
                    <label htmlFor="">Tên</label>
                    <input type="text" 
                    onChange={this.changeValue}
                    name='name'
                    /> <br />

                    <label htmlFor="">Tuổi</label>

                    <input type="text"
                     onChange={this.changeValue}
                    name='age'
                    /> <br />
                    <button onClick={this.saveInfo}>Lưu</button>
                </form>
            </>
        )
    }
}
