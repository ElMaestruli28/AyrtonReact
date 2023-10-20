import React, { Component } from "react"

export default class Foro extends Component{
  constructor(props){
    super(props)
    this.commentBox = React.createRef();
    this.isScriptMounted = false;
  }

  componentDidMount(){
    if (!this.isScriptMounted) {
      let scriptEl = document.createElement("script")
      scriptEl.setAttribute("src","https://utteranc.es/client.js")
      scriptEl.setAttribute("crossorigin","anonymous")
      scriptEl.setAttribute("async",true)
      scriptEl.setAttribute("repo","ElMaestruli28/AM-Engineering")
      scriptEl.setAttribute("issue-term","url")
      scriptEl.setAttribute("theme","dark-blue")
      this.commentBox.current.appendChild(scriptEl)
      this.isScriptMounted = true;

      
    }
  } 

  render(){

    return (
      <div className="w-full" id="comments">
        <div ref={this.commentBox}></div>
      </div>
  )
}
}
