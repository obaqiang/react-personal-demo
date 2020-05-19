// function Home() {
//     return (
//         "這是home"
//     )
// }
// export default Home
import React from 'react'

// import axios from 'axios'
import http from '../../utils/axiosCore'
// import axios from 'axios'



export default class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        }
    }

    async componentDidMount() {
        await http.get('/news')
            .then((res) => {
                const listData = res.data.data.list;
                console.log(listData);
                this.setState({
                    listData
                });
            });
    }

    submitForm() {
        http.post('/form', {
            hello: document.getElementById('input').value,
            now: new Date().getTime()
        })
            .then((res) => {
                alert(res.data.masg);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const listData = this.state.listData;
        let ele = listData.map((item) => {
            return <p key={item.id}>{item.title}:{item.url}</p>
        })
        return (
            <div className="hello-box">
                <div className="hello-list">{ele}</div>
                <form>
                    <input type="text" name="hello" id="input" />
                    <input type="button" onClick={this.submitForm} value="提交" />
                </form>
            </div>
        );
    }
}