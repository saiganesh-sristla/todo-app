const zod = require('zod');

const createTodoValidate = zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodoValidate = zod.object({
    id:zod.string()
})

module.exports = {
    createTodoValidate,
    updateTodoValidate
}