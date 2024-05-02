export function subtitle(){
  class PsuedoElemento extends HTMLElement{
    constructor(){
      super()
      this.render()
    }
    render(){
      var style=document.createElement("style")
      style.textContent=`
      .text{
        font-size:38px;
        font-weight:700;
        font-family:Roboto,san serif;
        margin:5rem 2rem 2rem 2rem;
      }`
      
      

      var shadow=this.attachShadow({mode:"open"})
      shadow.appendChild(style)

      var div=document.createElement("div");
      div.classList.add("text")
      div.textContent="Subtitulo"
      shadow.appendChild(div)
    }
  }

  class PsuedoElemento2 extends HTMLElement{
    constructor(){
      super()
      this.render()
    }
    render(){
      var style=document.createElement("style")
      style.textContent=`
      .text{
        font-size:38px;
        font-weight:700;
        font-family:Roboto,san serif;
        margin:5rem 2rem 2rem 2rem;
      }`
      
      

      var shadow=this.attachShadow({mode:"open"})
      shadow.appendChild(style)

      var div=document.createElement("div");
      div.classList.add("text")
      div.textContent="Subtitulo 2"
      shadow.appendChild(div)
    }
  }

  customElements.define("mi-subtitle" , PsuedoElemento)
  customElements.define("sub-title2", PsuedoElemento2)

}