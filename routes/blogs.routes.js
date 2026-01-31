const { Router } = require("express");

const blogsController = require("../controllers/blogs.controller");

const router = Router();

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blogs
 *     responses:
 *       200:
 *         description: List of blogs
 */
router.get("/", blogsController.getBlogs);

/**
 * @swagger
 * /api/blogs/{id}:
 *   get:
 *     summary: Get blog using ID
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: A single blog
 */
router.get("/:id", blogsController.getBlogById);

/**
 * @swagger
 * /api/blogs:
 *   post:
 *     summary: Create a blog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blog created
 */
router.post("/", blogsController.createBlog);

/**
 * @swagger
 * /api/blogs/{id}:
 *   put:
 *     summary: Update a blog
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blog updated
 */
router.put("/:id", blogsController.updateBlog);

/**
 * @swagger
 * /api/blogs/{id}:
 *   delete:
 *     summary: Delete a blog using ID
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Blog deleted
 */
router.delete("/:id", blogsController.deleteBlog);

module.exports = router;
