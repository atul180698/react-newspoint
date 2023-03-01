import React from 'react'

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props
  return (
    <div className="my-3">
      <div className="card">
        <img src={imageUrl ? imageUrl : "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}

            <div className="position-absolute badge rounded-pill bg-danger" style={{ left: '-2.5%', top: '-2.5%', fontSize: '.65em' }} >
              {author}
            </div></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitem