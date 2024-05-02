export function footer(){
  class PsuedoElemento extends HTMLElement{
    constructor(){
      super()
      this.render()
    }
    render(){
      var style=document.createElement("style")
      style.textContent=`
      .foot{
        background-color:#FFA0EA;
        height:11rem;
        font-size:22px;
        font-family:Roboto,san serif;
        padding:4rem;
        display:flex;
        justify-content:Center;
        align-items:Center;
      }`
      
      

      var shadow=this.attachShadow({mode:"open"})
      shadow.appendChild(style)

      var div=document.createElement("div");
      div.classList.add("foot")
      div.textContent="footer"
      shadow.appendChild(div)
    }
  }

  customElements.define("mi-footer" , PsuedoElemento)

}