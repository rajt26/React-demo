const registerData = (data) => fetch("http://localhost:4000/create",{
    method:"POST",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
})

const getData = () =>  fetch("http://localhost:4000/find",{
    method:"GET",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
})

const deleteData = (data) => fetch("http://localhost:4000/delete",{
    method:"POST",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
})

const updateData = (data) => fetch("http://localhost:4000/update",{
    method:"PUT",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)

})

export default {
    registerData,
    getData,
    deleteData,
    updateData
}