import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl,author,date} = this.props
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl?imageUrl:"https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} 
            
            <div className="position-absolute badge rounded-pill bg-danger" style={{left:'-2.5%', top:'-2.5%', fontSize:'.65em'}} >
              {author}
            </div></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
