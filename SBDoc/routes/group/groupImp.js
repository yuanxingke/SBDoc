/**
 * Created by sunxin on 2016/11/17.
 */
var group=require("./group");
var interface=[
    {
        "method":"POST",
        "path":"/group/create",
        "param": {
            name:{
                type:String
            },
            id:{
                type:String
            },
            group:{
                type:String,
                optional:1
            }
        },
        "data":String,
        user:1,
        handle:[group.validateUser,group.create]
    },
    {
        "method":"DELETE",
        "path":"/group/item",
        "param": {
            group:{
                type:String
            }
        },
        "data":String,
        user:1,
        handle:[group.validateUser,group.remove]
    },
    {
        "method":"GET",
        "path":"/group/interface",
        "param": {
            group:{
                type:String
            }
        },
        "data":String,
        user:1,
        handle:[group.validateUser,group.interface]
    },
];

module.exports=interface;