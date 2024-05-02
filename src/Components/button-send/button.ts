export function buttonSend(){
  class PsuedoElemento extends HTMLElement{
    constructor(){
      super()
      this.render()
    }
    render(){
      var style=document.createElement("style")
      style.textContent=`
      .root{
        margin:40px;
      }
      
      button{
        font-family:Roboto,san serif;
        font-size:22px;
        background-color:#9CBBE9;
        width:300px;
        padding:1rem;
        border:none;
        border-radius:4px;
        font-weight:500;
      }
      `
      
      

      var shadow=this.attachShadow({mode:"open"})
      shadow.appendChild(style)

      var div=document.createElement("div");
      div.classList.add("root")
      div.innerHTML=`<button>Enviar</button>`
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
      .root{
        margin:40px;
        margin-top:6rem:
        max-width:700px;
      }
      
      button{
        font-family:Roboto,san serif;
        font-size:22px;
        font-weight:500;
        background-color:white;
        width:300px;
        padding:1rem;
        border-radius:4px;
      }
      `
      
      

      var shadow=this.attachShadow({mode:"open"})
      shadow.appendChild(style)

      var div=document.createElement("div");
      div.classList.add("root")
      div.innerHTML=`<button>Volver</button>`
      shadow.appendChild(div)
    }
  }

  customElements.define("button-send" , PsuedoElemento)
  customElements.define("button-oulined" , PsuedoElemento2)

}