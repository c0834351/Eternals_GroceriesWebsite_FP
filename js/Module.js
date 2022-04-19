const grocerydb = (dbname, table) => {
    //Create database

    const db = new Dexie(dbname)
    db.version(2).stores(table);
    db.open();

    return db;
}

const bulkcreate = (dbtable,data)=>{
    let flag = empty(data);
    if(flag){
        dbtable.bulkAdd([data]);
        console.log("User registered successfully, please login now");
    } else {
        console.log("Please enter all fields..!");
    }
    return flag;
}

const empty = object=> {
    let flag = false;

    for(const value in object){
        if(object[value]!="" && object.hasOwnProperty(value)){
            flag = true;
        }
        else {
            flag = false;
        }
    }
    return flag;
}

// Get Data from DB
const getData = (dbtable, fn)=>{
    let index =0;
    let obj={};

    dbtable.count((count)=>{
        if(count){
            dbtable.each(table=>{
                obj = sortObj(table);
                fn(obj,index++);
            })
        }
        else {
            fn(0)
        }
    })
}
// Sort the data
const sortObj = sobj=>{
    let obj={}
    obj ={
        id: sobj.id,
        username: sobj.username,
        email: sobj.email,
        password: sobj.password
    }
    return obj;
}

export default grocerydb;

export {
    bulkcreate,
    getData
}