const base = {
    get() {
        return {
            url : "http://localhost:8080/xiangmuyanshou/",
            name: "xiangmuyanshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiangmuyanshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "科研项目验收管理系统"
        } 
    }
}
export default base
