import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { text, title, imageUrl,url,src,date } = this.props
    
    return (
      <>
      <h6><span className="badge rounded-pill text-bg-danger" style={{marginLeft:"20vw"}}>{src}</span></h6>
        <div className="card" style={{fontSize:14}}>
           
        <img src={imageUrl} height={200} alt='News'/>
       <div className="card-body">
           
          <h5 className="card-title">{title}...</h5>
          <h6 style={{display:'flex',fontSize:10,color:"#7f8c8d"}}>{date}</h6>
          <p className="card-text">{text}...</p>
          <a target='_blank' href={url} className="btn btn-dark btn-sm">Read More</a>
        </div>
      </div>
      </>
    )
  }
}
