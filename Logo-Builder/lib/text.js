class Text{
    constructor(){
        this.textEl = "";
        this.shapeEl = "";
    }
    setText(message, color){
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }
    
    render(){
        
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle cx="150" cy="100" r="80" fill="green"/>
      
        ${this.textEl}
      
      <script xmlns=""/><UMSDataElement xmlns="" id="UMSSendDataEventElement"/></svg>`
    }

    setShape(shape){
        this.shapeEl = shape.render()
    }
}

module.exports = Text