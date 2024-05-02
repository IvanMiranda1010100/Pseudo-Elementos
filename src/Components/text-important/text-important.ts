export function textoImportant(){
  class PsuedoElemento extends HTMLElement{
    constructor(){
      super()
      this.render()
    }
    render(){
      var style=document.createElement("style")
      style.textContent=`
      .text{
        font-size:22px;
        font-weight:500;
        font-family:Roboto,san serif;
        margin:3rem;
      }`
      
      

      var shadow=this.attachShadow({mode:"open"})
      shadow.appendChild(style)

      var div=document.createElement("div");
      div.classList.add("text")
      div.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      shadow.appendChild(div)
    }
  }

  customElements.define("text-important" , PsuedoElemento)

}