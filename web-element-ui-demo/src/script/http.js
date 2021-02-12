import axios from 'axios'
// 请求超时时间 15s
axios.defaults.timeout = 15000

let cancel;
const CancelToken = axios.CancelToken;
axios.defaults.baseURL = process.env.BASE_API

// axios 请求响应
axios.interceptors.response.use(
    response =>{
        return Promise.resolve(response) 
    },
    error =>{
        // 错误信息提示
		let errText = ''
		if (error.response) {
			if (error.response.status == 504 || error.response.status == 500) errText = "抱歉,服务器异常!"
			if (error.response.status == 401) errText = "登录已过期，请重新登录!" 
			if (error.response.status == 403) errText = "抱歉,你无权访问该页面!"
			if (error.response.data && error.response.data.message) errText = error.response.data.message
		} else if (error.request) {
			if (error.message == "timeout of 15000ms exceeded") errText = "抱歉,请求超时!"
			else errText = "抱歉,系统错误!"
		} else {
			errText = "抱歉,系统错误!"
		}
		// 错误处理
        if (error.response) {
			if (error.response.status == 403) {
				self.vm.$router.push({ path: "/403" });
			}
			return Promise.reject((error.response.status && error.response.data) || { code: 1, message: errText })
		}

		if (error.request && error.message == "timeout of 15000ms exceeded")
			return Promise.reject({ code: 1, message: errText })
		
		// 错误信息 返回必须用Promise.reject, 若否，则会自动进入Promise.resolve
		return Promise.reject({ code: 1, message: errText })
    }
)

// 序列化数组
const serializeArray = (object={}) => {
	var params = new URLSearchParams();
	for(var key in object){
		var value = object[key];
		if(Array.isArray(value)){
			key = key+'[]';
			value.forEach(v=>params.append(key,v))
		}else{
			params.append(key,value)
		}
	}
	return params;
}

// 请求封装
function ajax(url,data={},params={},contentTypeIndex=0,type,responsetype=''){//contentTypeIndex可传数值，代码下面数组的值,也可传字符串
    let contentTypeArr = ["application/json;charset=UTF-8","application/x-www-form-urlencoded","multipart/form-data"]
    let access_token = localStorage.getItem('access_token');
    // "Bearer 3be60aa6-e02a-46e8-96c8-e8116b5c6132"
    let Authorization = !access_token ? "Basic " + '' : "Bearer " + access_token;
    // 特殊处理 刷新token 接口
    // if(getQueryString(url, 'grant_type') === 'refresh_token') Authorization = "Basic " + Base64Encode("web:web") 

    axios.defaults.headers = {
        'Content-Type': contentTypeArr[contentTypeIndex],
        Authorization: Authorization
    }

    if(contentTypeIndex===1){
        params = serializeArray(params);
        data = serializeArray(data);
    }


    let responsetype1 = responsetype ? responsetype:'';

    return new Promise((resolve,reject) => {
            let cancelToken = new CancelToken(c => cancel = c);
            axios({
                method: type,
                url,
                params,
                data,
                cancelToken,
                responseType:responsetype1
            }).then(res => {
                return resolve(res);
            }).catch(error=>{
                if(error.code==401){
                    localStorage.clear()
                }
                reject(error);
            });
    });
}


//get请求
const get = function(url,data,params,contentType) {
    return ajax(url,params,data,contentType,'get');
};
//post请求
const post = function(url,data,params,contentType,responsetype) {
    return ajax(url,data,params,contentType,'post',responsetype);
};
//del请求
const del = function(url,data,params,contentType) {
    return ajax(url,data,params,contentType,'delete');
};
//put请求
const put = function(url,data,params,contentType) {
    return ajax(url,data,params,contentType,'put');
};

export default {
    get, post, del, put
};

