export function titulo(){
  class PsuedoElemento extends HTMLElement{
    constructor(){
      super()
      this.render()
    }
    render(){
      var style=document.createElement("style")
      style.textContent=`
      .titulo{
        font-size:52px;
        font-weight:700;
        font-family:Roboto,san serif;
        margin:2rem;
      }`
      
      

      var shadow=this.attachShadow({mode:"open"})
      shadow.appendChild(style)

      var div=document.createElement("div");
      div.classList.add("titulo")
      div.textContent="Titulo de esta pagina"
      shadow.appendChild(div)
    }
  }

  customElements.define("mi-titulo" , PsuedoElemento)

}