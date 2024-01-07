import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {
   constructor(){
    super()
    this.state={
      articles:[],
      page:1}
   }
  async componentDidMount(){
     let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a9281d05c4034e2aa7696cd32d18cb8f&page=1&pageSize=6"
     fetch(url).then((res)=>res.json()).then((data)=>{
        console.log("kkk",data)
        this.setState({articles:data.articles,totalResults:data.totalResults})
     })
   };

   handleNext= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a9281d05c4034e2aa7696cd32d18cb8f&page=${this.state.page+1}&pageSize=20`
    fetch(url).then((res)=>res.json()).then((data)=>{
       console.log("kkk",data)
       this.setState({articles:data.articles,page:this.state.page+1})
    }) 
  } 
   handlePrevious=()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a9281d05c4034e2aa7696cd32d18cb8f&page=${this.state.page-1}&pageSize=20`
    fetch(url).then((res)=>res.json()).then((data)=>{
       console.log("kkk",data)
       this.setState({articles:data.articles,page:this.state.page-1})
    })

   }
  render() {
    return (
      <div className='container my-3 text-center' >
        <h1>NewsWave -Top Headlines</h1>
        <loading></loading>
        <div className='row'>
         {this.state.articles?.map((item) => {
            return (
              <div key={item.url} className="col-md-4 my-3">
              <NewsItem title={item.title?item.title.slice(0,42):""}
                text={item.description?item.description.slice(0,90):""}
                imageUrl={item.urlToImage}
                url={item.url}/></div>
            )
          })}
          <div style={{display:'flex',justifyContent:"space-between"}}>
          <button disabled={this.state.page<=1} onClick={this.handlePrevious} style={{width:100,marginBottom:10}} type="button" className="btn btn-primary btn-lg"> Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/6)}  onClick={this.handleNext} style={{width:100,marginBottom:10}} type="button" className="btn btn-primary btn-lg">Next</button>
          </div>

      </div></div>

    )
  }
}
