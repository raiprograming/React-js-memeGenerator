import React from "react";
class Content extends React.Component{
    constructor(props){
        super(props)
        this.state={
            toptext:"",
            bottomtext:"",
            url:"https://i.imgflip.com/1ur9b0.jpg",
            allmemes:[]
        }
        this.generator=this.generator.bind(this);
        this.generate=this.generate.bind(this);
    }
    generator(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        });

    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes").then(response=>response.json())
        .then(response =>{
            const {memes}=response.data
            console.log(memes[0])
            this.setState({
                allmemes:memes
            })
        })
    }
    generate(event){
        event.preventDefault()
        const randnum=Math.floor(Math.random() * this.state.allmemes.length)
        const randomImg=this.state.allmemes[randnum].url
        this.setState({
            url:randomImg
        })

    }
    render(){
        return(
            <div className="contentcss">
                <input className="input" type="text" placeholder="top text" name="toptext" onChange={this.generator}></input>
                <input className="input" type="text" placeholder="bottom text" name="bottomtext" onChange={this.generator}></input><br>
                </br>
                <button className="buttoncss" onClick={this.generate}>generate</button>
                <div className="container2">
                    <img src={this.state.url} alt="problrm"></img>
        <div className="top"><h2>{this.state.toptext}</h2></div>
        <div className="bottom"><h2>{this.state.bottomtext}</h2></div>
                </div>
            </div>
        )
    }
}
export default Content;