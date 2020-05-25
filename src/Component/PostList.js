import React, { Component } from 'react'
import Axios from 'axios'


class PostList extends Component {

constructor(props) {
    super(props)

    this.state = {
         posts: []
    }
}

componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts1')
    .then(response => {
       this.setState({
           posts : response.data
       })
    })

    // .then(response => {console.log(response)})

    .catch(error => {
        console.log(error)
    })
}




    render() {
        const {posts} = this.state
        return (
            <div>
                PostList
                <table border="1px; ">
                  <tr>
                      <th width="50px">User ID</th>
                      <th width="50px">Id</th>
                      <th width="200px">Title</th>
                      <th width="500px">Body</th>
                  </tr>
                  <tbody>
                      {
                          posts.length? 
                        posts.map(post => 
                             <React.Fragment>
                                 <tr>
                                 <td>{post.userId}</td>
                                 <td>{post.id}</td>
                                 <td>{post.title}</td>
                                 <td>{post.body}</td>
                                 </tr>
                             </React.Fragment>
                        ) : <tr align='center'>No Item Here</tr>
                    }
                    </tbody>
                     
                </table>
                
            </div>
        )
    }
}

export default PostList
