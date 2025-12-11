// console.log("hello");
interface Formdata{
    name:string;
    email:string;
    phone:string;
    password:string;
    role:string;
    check:boolean;
}
let formdata: Formdata ={
    name:"",
    email:"",
    phone:"",
    password:"",
    role:"",
    check:true

};
(window as any).onload=function(){
    let data =this.localStorage.getItem("userList")
    if(data){
        userlist = JSON.parse(data);
        getuserlist();
        
    }
}
function handlesubmit(event:SubmitEvent):void{
    event.preventDefault();
    let form =event.target as HTMLFormElement;
    userlist.push(formdata)
    console.log(userlist);
    saveLocaldata();
    getuserlist();
    form.reset()
    
    // console.log(form);
    

}
let userlist :Formdata[] =[];
function handlechange(event:Event):void{
    let target = event.target as HTMLInputElement
    let {name,type}=target;
    const value =type==="checkbox"?target.checked:target.value;
    formdata ={
        ...formdata,
        [name]:value
    }
    console.log("formdata",formdata);
    
    
    
    
}
function handleselectchange(event : Event):void{
    let target = event.target as HTMLSelectElement;
    let {name,value}=target;
    formdata ={
        ...formdata,
        [name]:value
    }

}
// function handleRolechange(event : Event):void{
//     let target = event.target as HTMLSelectElement;
//     let{name,value}=target;
//     formdata ={
//         ...formdata,
//         [name]:value
//     }
// }
function saveLocaldata(){
  localStorage.setItem("userlist",JSON.stringify(userlist));
} 
function getuserlist(){
  let userList = document.getElementById("userList");
//   userList.innerHTML = "";
  userlist.map((value,index) => {
  const li = document.createElement("li")
  li.innerHTML =`<span>${index+1}.  ${value.name} | ${value.email} |${value.phone} |${value.phone} |${value.password}</span>`;
  userList?.appendChild(li);
  return userList;
})
}
(window as any).handlechange=handlechange;
(window as any).handlesubmit=handlesubmit;
(window as any).handleselectchange=handleselectchange;
// (window as any).handleRolechange=handleRolechange
(window as any).saveLocaldata=saveLocaldata;
(window as any).getuserlist=getuserlist;