import { Category } from "../db/models/category.models.js"

export const addCategoryHandler = async(req,reply)=>{
    const existCategory = await Category.findOne({
        where:{
            name: req.body.name
        }
    })
    if(existCategory) return reply.send({message:"category already exists"})
    const category = await Category.create(req.body)
    return reply.status(201).send({...category.dataValues})
}
export const updateCategoryHandler = async(req,reply)=>{

    const {id} = req.params
    const updateResult = await Category.update({
        name: req.body.name,
        ParentId: req.body.ParentId
    },{
        where:{
            id
        }
    })
   if(updateResult[0]!==1) return reply.status(500).send({message:"Unsuccessfull category update !"})
    return reply.status(201).send({message:"Category successfully updated"})
}

export const listCategoriesHandler = async(req,reply)=>{
    const categories = await Category.findAll({
        include:[{
            model: Category,
            as:"children",
            include:[
                {
                    model:Category,
                    as:"children"
                }
            ]
            }
        ],
        where:{
            ParentId : null
        }
    })
    return reply.status(200).send({...categories})
}

export const getOneCategoryHandler = async(req,reply)=>{
    const {id} = req.params
    const category = await Category.findOne({
        where:{
            id
        },
        include:[
            {
                model: Category,
                as:"children"
            }
        ]
    })
    if(!category?.dataValues) return reply.status(404).send({message:"category dosen't exists"})
    return reply.status(200).send({...category.dataValues})
}
export const deleteCategoryHandler = async(req,reply)=>{
    const {id} = req.params
    const deleteResult = await Category.destroy({
        where:{
            id
        }
    })
    if(!deleteResult) reply.status(500).send({message:"category dosen't deleted"})
    return reply.status(200).send({message:"category successfully deleted"})
}