function CustomRender(reactElements , Container) {
    /*
    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElement.childen
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('traget',reactElements.props.traget)
    Container.appendChild(domElement)
    */
   const domElement =document.createElement(reactElements.type)
   domElement.inerHTML =reactElements.childen
   for(const prop in reactElements.prop){
    if(prop == 'children') continue
    domElement.setAttribute(prop,reactElement.props[prop])
   }
   Container.appendChild(domElement)

}
const reactElements = {
    type : "a",
    props:{
        href: "https://google.com",
        traget: "_blank",
    },
    childen: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')
CustomRender(reactElements ,mainContainer)