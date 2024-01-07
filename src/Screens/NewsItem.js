import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { text, title, imageUrl,url } = this.props
    return (
        <div className="card" style={{ width: "16rem",fontSize:14}}>
        <img src={imageUrl} height={200} alt='News'/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{text}...</p>
          <a target='_blank' href={url} className="btn btn-dark btn-sm">Read More</a>
        </div>
      </div>
    )
  }
}
