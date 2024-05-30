import { addCategoryHandler, deleteCategoryHandler, getOneCategoryHandler, listCategoriesHandler, updateCategoryHandler } from "../handler/category.handlers.js"


const addCategorySchema = {
    schema:{
        tags:['Category'],
        summary:"Add category",
        body:{
            type:"object",
            properties:{
                name:{type:"string"},
                ParentId:{type:"number"},
            },
       
        },
        response:{
            201: {
                type:"object",
                properties:{
                    id:{type:"number"},
                    name:{type:"string"},
                    ParentId:{type:"number"}
                }
            }
        },
        
    },
    handler: addCategoryHandler

}
const updateCategorySchema = {
    schema:{
        tags:['Category'],
        summary:"Update category",
        params:{
            id:{type:"number"}
        },
        body:{
            type:"object",
            properties:{
                name:{type:"string"},
                parentId:{type:"number"},
            },
       
        },
        response:{
            201: {
                message: {type:"string"}
            }
        },
        
    },
    handler: updateCategoryHandler

}

const listCategoriesSchema = {
        schema: {
        tags: ['Category'],
        summary: "get categories",
        response: {
            199: {
                type: "object"
            }
        }
    },
        handler: listCategoriesHandler
}
const getOneCategorySchema = {
    schema:{
        tags:['Category'],
        summary: "Get one Category by id",
        params:{
            id:{type:"number"}
        },
        response:{
            200:{
                type:"object",
                properties:{
                    id:{type:"number"},
                    name:{type:"string"},
                    ParentId:{type:"number"},
                    children:{
                        type:"array",
                        items:{
                            type:'object',
                            properties:{
                                id:{type:"number"},
                                name:{type:"string"},
                                ParentId:{type:"number"},

                            }
                        }
                    }
                }
            },
        },
        
    },
    handler: getOneCategoryHandler
}
const removeCategorySchema = {
    schema:{
        tags:['Category'],
        summary: "Delete category by id",
        params:{
            id:{type:"number"}
        },
        response:{
            200: {
                message: {type:"string"}
            }
        },
        
    },
    handler: deleteCategoryHandler
}





export default function categoryRoutes(fastify,options,done){
    fastify.get("/list",listCategoriesSchema)
    fastify.patch("/update/:id",updateCategorySchema)
    fastify.post("/add",addCategorySchema)
    fastify.get("/:id",getOneCategorySchema)
    fastify.delete("/:id",removeCategorySchema)
    done()
}