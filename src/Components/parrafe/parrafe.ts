export function parrafe(){
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
      div.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt velit quas iste laboriosam nam officia. Exercitationem nemo doloribus unde voluptatem sint tempore dolorem commodi, et laudantium obcaecati tempora! Quidem, voluptas!"
      shadow.appendChild(div)
    }
  }

  customElements.define("mi-parrafe" , PsuedoElemento)

}