
import todoModel from "../Model/TodoModel.js";

export async function createTask(req, res) {
    if (!req.body) {
        return res.status(422).json({
            status: 'error',
            message: 'All fields are required'
        })
    }
    try {
        const task = await todoModel.create(req.body);
        if (!task) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to create task'
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'Succesfully created a task',
            task,
        });

    } catch (error) {
        console.log('error creating task', error)

    }

}

export async function getTask(req, res) {
    try {
        const task = await todoModel.find();
        if (!task) {
            return res.status(400).json({
                status: 'error',
                message: 'failed to fetch saved task'
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'fetched saved data successfully',
            task
        })

    } catch (error) {
        console.log('failed to fetch todo data', error)
    }

}

export async function updateTask(req, res) {
    if (!req.body) {
        return res.status(422).json({
            status: 'error',
            message: 'update at leat one field'
        })
    }
    if (!req.params.id) {
        return res.status(400).json({
            status: 'error',
            message: 'please provide task Id'
        })
    }

    try {
        const task = await todoModel.findById(req.params.id);
        if (!task) {
            return res.status(400).json({
                status: 'error',
                message: 'Provided Id is  Incorrect'
            })
        }

        const updatedTask = await todoModel.findByIdAndUpdate(
            { title: task.title },
            req.body,
            { new: true },
        );

        res.status(200).json({
            status: 'success',
            message: 'fetched saved data successfully',
            updatedTask
        });

    } catch (error) {
        console.log('failed to fetch todo data', error)
    }

}

export async function deleteTask(req, res) {
    if (!req.params.id) {
        return res.status(400).json({
            status: 'error',
            message: 'please provide a task id'
        })
    }
    try {
        if(!task){
            return res.status(404).josn({
                status: 'error',
                message: "couldn't find a task witht the provided ID"
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'Task deleted succesfuly'
        })
        
    } catch (error) {
        console.log('error-deleting-task', error)
        
    }
}