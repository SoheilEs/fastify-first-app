import { User , UserDetail} from "../db/models/user.models.js"

export const changeProfile = async(req,reply)=>{
 const body = {...req.body}
 const userDetail = await UserDetail.findOne({
    where:{
        UserId: req.user.id
    }
 })
 
 if(userDetail.dataValues){
   await UserDetail.update({
    address: body.address,
    latitudes: body.latitudes,
    longitudes: body.longitudes
},
   {where:{UserId: req.user.id}})
 }else{
    Object.assign(body,{UserId:req.user.id})
    const newUserDetail = await UserDetail.create(body)
    await newUserDetail.save()
 }
 return reply.status(201).send({message:"Update done successfully"})

}

export const getProfile = async(req,reply)=>{
    const user = await User.findOne({
        where: {
            id: req.user.id
        },
        include:{
            model:UserDetail,
            as:"UserDetail",
            attributes:['id','address','latitudes','longitudes']
        }
    })
    return reply.status(200).send({userDetail:user.dataValues})
}