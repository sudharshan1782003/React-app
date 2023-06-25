const ApiRequest = async(url = "", objOpt = null, errMsg = null) => {
    try{
        const response = await fetch(url, objOpt)
       if(!response.ok) throw Error ("please reload the Page")

    }
    catch(err){
        err = err.message
    }finally{
        return errMsg
    }
}

export default ApiRequest