//NULL型判断
const isNull = (value: any) : boolean => {
    return value == null || typeof(value) == 'undefined'
}

//非空判断
const isEmpty = (value: any) : boolean => {
    if(!isNull(value)){
        //空对象判断
        if(value instanceof Object){
            if(JSON.stringify(value) == "{}"){
                return true
            }
        }
        //空字符串判断
        if ((value + '').replace(/(^\s*)|(\s*$)/g, '').length === 0) {
            return true
        }
    } else {
        return true
    }

    return false
}

export  {isEmpty}