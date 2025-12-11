let formdata = {
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    check: true
};
window.onload = function () {
    let data = this.localStorage.getItem("userList");
    if (data) {
        userlist = JSON.parse(data);
        getuserlist();
    }
};
function handlesubmit(event) {
    event.preventDefault();
    let form = event.target;
    userlist.push(formdata);
    console.log(userlist);
    saveLocaldata();
    getuserlist();
    form.reset();
    // console.log(form);
}
let userlist = [];
function handlechange(event) {
    let target = event.target;
    let { name, type } = target;
    const value = type === "checkbox" ? target.checked : target.value;
    // console.log("name",name);
    // console.log("value",value);
    // console.log("checked",checked);
    formdata = Object.assign(Object.assign({}, formdata), { [name]: value });
    console.log("formdata", formdata);
}
function handleselectchange(event) {
    let target = event.target;
    let { name, value } = target;
    formdata = Object.assign(Object.assign({}, formdata), { [name]: value });
}
// function handleRolechange(event : Event):void{
//     let target = event.target as HTMLSelectElement;
//     let{name,value}=target;
//     formdata ={
//         ...formdata,
//         [name]:value
//     }
// }
function saveLocaldata() {
    localStorage.setItem("userlist", JSON.stringify(userlist));
}
function getuserlist() {
    let userList = document.getElementById("userList");
    //   userList.innerHTML = "";
    userlist.map((value, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${index + 1}.  ${value.name} | ${value.email} |${value.phone} |${value.phone} |${value.password}</span>`;
        userList === null || userList === void 0 ? void 0 : userList.appendChild(li);
        return userList;
    });
}
window.handlechange = handlechange;
window.handlesubmit = handlesubmit;
window.handleselectchange = handleselectchange;
// (window as any).handleRolechange=handleRolechange
window.saveLocaldata = saveLocaldata;
window.getuserlist = getuserlist;
export {};
//# sourceMappingURL=index.js.map