export function text(){
  class PsuedoElemento extends HTMLElement{
    constructor(){
      super()
      this.render()
    }
    render(){
      var style=document.createElement("style")
      style.textContent=`
      .text{
        font-size:18px;
        font-weight:400;
        font-family:Roboto,san serif;
        margin:40px;
      }`
      
      

      var shadow=this.attachShadow({mode:"open"})
      shadow.appendChild(style)

      var div=document.createElement("div");
      div.classList.add("text")
      div.textContent="Esta página sin dudas es la mejor"
      shadow.appendChild(div)
    }
  }

  customElements.define("text-basic" , PsuedoElemento)

}