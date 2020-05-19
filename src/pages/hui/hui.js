import React from 'react'
import plupload from 'plupload'






class Hui extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filePhoto: this.props.baby.photo_url || null,
        }
    }
    // 这里我在推荐另一种写法, 如果你不需要在构造函数中 处理其他的数据,只是想初始化用户数据而已, 那么可以使用`属性初始化`方式来简化你的代码:
    // 如:
    // state = {
    //     filePhoto: this.props.baby.photo_url || null,
    // }
    initSinglePlupload = () => {
        var uploader = new plupload.Uploader({//创建实例的构造方法
            runtimes: 'html5, flash',//上传插件初始化选用那种方式的优先级顺序
            browse_button: 'user-photo', // 上传按钮 引发上传事件的按钮的id
            url: "https://upload.qiniup.com",   //远程上传地址 后台地址
            filters: {
                max_file_size: '10mb', //最大上传文件大小（格式100b, 10kb, 10mb, 1gb）
                mime_types: [
                    { title: "JPG/PNG文件", extensions: "jpg,jpeg,JPG,JPEG,png,PNG,gif,GIF" }
                ]
            },
            multi_selection: false,   //true多文件上传, false 单文件上传
            multipart_params: {
                // 需要的token值,这个token我在componentDidMount中对token值做了处理了,所以这里不需要在带值过去了
                token: ''
            },
            multipart: true, //为true时将以multipart/form-data的形式来上传文件
            resize: {
                width: 1600,
                height: 1600
            },
            init: {
                // 注: FilesAdded方法我放到componentDidMount中做了,然后在componentDidMount中做了init的调用,这么做是因为是想要在页面刷新完之后,点击上传图标就可以很及时的拿到上传所需要的token值
                // FilesAdded: function (uploader, files) { //文件上传前
                //   this.toast = ToastManager.showLoading("图片上传中...");
                //   uploader.start();
                // },
                FileUploaded: function (up, file, result) { //文件上传成功的时候触发
                    // 图片上传成功之后, 本地不会异步执行state值, 把头像替换,所以这里需要reload一遍页面
                    // 然后后端会重新返回头像链接,这时候img中再去取头像即可

                    // location.reload()
                    // this.toast.cancel()
                },
                Error: function (up, err) { //上传出错的时候触发
                    // this.toast.cancel() // 隐藏 图片上传loading..
                }
            }
        });
        return uploader
    }
    // 页面初始化全部加载完
    componentDidMount() {
        // 获取后端返回的token url
        var generate_token_url = this.props.generate_token_url

        var uploader = this.initSinglePlupload('')
        uploader.bind('FilesAdded', function (uploader, file) {
            // this.toast = ToastManager.showLoading("图片上传中...");

            // 说明, 下面的`request`是我在axios的基础上做的一个请求封装, 如果你没有封装, 直接用axios的方式操作也是没有问题的.

            // request({
            //     url: generate_token_url, // 友情提醒: generate_token_url必须要放到 uploader.bind上面去定义.否则拿不到值
            //     method: "GET",
            //     params: {
            //         type: 'baby'
            //         // 这里的参数根据 自己项目来判断传什么样的参数
            //         // 因为我当前针对的是宝宝信息页面的头像上传,所以这里和后端商量之后,传'baby'给后端
            //     },
            //     headers: csrfHeaders // 跨域处理
            // }).then(res => {
            //     // 下面log里面打印的是从七牛请求链接中拿到的token值,这个值必需要,是为了上传凭证,给七牛做校验
            //     // console.log(res.data.token)

            //     uploader.setOption('multipart_params', {
            //         token: res.data.token  // 上传凭证
            //     })

            //     uploader.start() // 调用实例对象的start()方法开始上传文件，当然你也可以在其他地方调用该方法
            // }).catch(err => {
            //     Raven.captureException(err)
            //     this.toast.cancel()
            // })
        })
        uploader.init(); //在实例对象上调用init()方法进行初始化
    }




    render() {
        return (
            <div id="user-photo">
                // 这里的id值是必须要的, 否则取不到
                // uploadDefaultPhoto 是用户没上传头像时 import进来的默认头像
                <img src={this.state.filePhoto } />
            </div>
        )
    }

}
export default Hui