
import React from 'react'
import http from '../../../utils/axiosCore'
import './list.css'






class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            res_data: [],
            is_loading:false
        }
    }
    queryList=()=> {
    
        let that =this
        http.post('/querylist', {}).then((res) => {
        
            that.setState({
                res_data: res.data.res_data
            })
            // alert(res.data.masg);
        }).catch((err) => {
            console.log(err);
        })
    }
    componentDidMount() {
        this.queryList()
    }
  
    render() {
        const lists = this.state.res_data.map((item,index)=>
        <div className="list" key={index}>
            <p className="text-left list_pa">发骚人:{item.name}</p>
            <img className="list_img" src={item.img} />
            <p className="text-left list_pb">{item.content}</p>
        </div>
        )
        return (
            <div className="list_area">
                {lists}
            </div>
        )
    }
}
export default List