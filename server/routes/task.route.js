import {Router} from "express";
import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
    getUserTasks
} from "../controller/task.controller.js"

const router = Router()

router.route("/new").post(createTask)
router.route("/").get(getAllTasks)
router.route("/:id").get(getTaskById)
router.route("/:id").put(updateTaskById)
router.route("/:id").delete(deleteTaskById)
router.route("/:id").delete(deleteTaskById)
router.route("/userTasks/:userId").get(getUserTasks)

export default router