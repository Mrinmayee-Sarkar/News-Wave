import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'


export default class News extends Component {
   constructor(){
    super()
    this.state={
      articles:[],
      page:1,
      loading:false
    }
   }
  async componentDidMount(){
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9281d05c4034e2aa7696cd32d18cb8f&page=1&pageSize=9`
     this.setState({loading:true})
     fetch(url).then((res)=>res.json()).then((data)=>{
        this.setState({
          articles:data.articles,
          totalResults:data.totalResults,
          loading:false})
     })
   };

   handleNext= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9281d05c4034e2aa7696cd32d18cb8f&page=${this.state.page+1}&pageSize=9`
    this.setState({loading:true})
    fetch(url).then((res)=>res.json()).then((data)=>{
       this.setState({
        articles:data.articles,
        page:this.state.page+1,
      loading:false})
    }) 
  } 
   handlePrevious=()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9281d05c4034e2aa7696cd32d18cb8f&page=${this.state.page-1}&pageSize=9`
    this.setState({loading:true})
    fetch(url).then((res)=>res.json()).then((data)=>{
       this.setState({
        articles:data.articles,
        page:this.state.page-1,
        loading:false})
    })

   }
  render() {
    return (
      <div className='container my-3 text-center'>
        <h1 style={{padding:'3vw' }}>NewsWave -Top Headlines</h1>
        {this.state.loading&&<Loader/>}
        
        <div className='row'>
         {!this.state.loading && this.state.articles?.map((item) => {
            return (
              
              <div key={item.url} className="col-md-4 my-3">
              <NewsItem title={item.title?item.title.slice(0,42):""}
                text={item.description?item.description.slice(0,90):""}
                imageUrl={item.urlToImage}
                url={item.url}
                src={item.source.name}
                date={item.publishedAt}
      />
                </div>
               
            )
          })}
          <div style={{display:'flex',justifyContent:"space-between"}}>
          <button disabled={this.state.page<=1} 
          onClick={this.handlePrevious} 
          className="btn btn-primary btn-lg">&larr;Previous</button>
          <button 
          disabled={this.state.page+1>Math.ceil(this.state.totalResults/6)} 
           onClick={this.handleNext} 
           className="btn btn-primary btn-lg">Next&rarr;</button>
          </div>

      </div></div>

    )
  }
}
