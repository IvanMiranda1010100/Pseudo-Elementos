export function label(){
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
        margin:20px;
      }
      
      .input{
        width:300px;
        height:2rem;
        border:solid 0.5px;
        margin:5px;
        padding:1rem
      }
      `
      
      

      var shadow=this.attachShadow({mode:"open"})
      shadow.appendChild(style)

      var div=document.createElement("div");
      div.classList.add("text")
      div.innerHTML=`
      <label>Nombre
            <div class="contenedor-input">
                 <input placeholder="Nombre" class="input">
            </div>
      </label>`
      shadow.appendChild(div)
    }
  }

  customElements.define("mi-label" , PsuedoElemento)

}