export function header(){
    class PsuedoElemento extends HTMLElement{
      constructor(){
        super()
        this.render()
      }
      render(){
        var style=document.createElement("style")
        style.textContent=`
        .root{
          background-color:#FF8282;
          height:3rem;
          font-size:22px;
          font-family:Roboto,san serif;
          padding:1rem;
          display:flex;
          justify-content:Center;
          align-items:Center;
        }`
        
        
  
        var shadow=this.attachShadow({mode:"open"})
        shadow.appendChild(style)
  
        var div=document.createElement("div");
        div.classList.add("root")
        div.textContent="Header"
        div.style.textAlign="Center"
        shadow.appendChild(div)
      }
    }
  
    customElements.define("mi-header" , PsuedoElemento)
  
}