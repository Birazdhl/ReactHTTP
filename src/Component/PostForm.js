import React, { Component } from 'react'
import axios from 'axios'


class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId : '',
             body : '',
             title : ''
        }
    }
    
   onChangeHandler = (e) => {
       this.setState({
           [e.target.name] : e.target.value
       })
   }


   submitForm = (e) => {

        e.preventDefault()

        console.log(this.state)

        axios
       .post('https://jsonplaceholder.typicode.com/posts',this.state)
       .then(response => {
           console.log(response)
       })

       .catch(error => {
           console.log(error)
       })
   }

    render() {
        const {userId,body,title} = this.state
        return (
            <form onSubmit={this.submitForm}>
                <div>
                <input  type="text" name="userId" value={userId} onChange={this.onChangeHandler} />
                </div>
                <div>
                <input  type="text" name="body" value={body} onChange={this.onChangeHandler} />
                </div>
                <div>
                <input  type="text" name="title" value={title} onChange={this.onChangeHandler} />
                </div>

                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default PostForm
