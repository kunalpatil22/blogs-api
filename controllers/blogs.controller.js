const Joi = require("joi");

const Blog = require("../models/Blog.model");

const {
  createBlogValidator,
  updateBlogValidator,
} = require("../validators/blog.validator");

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isDeleted: false });
    res.send(blogs);
  } catch (err) {
    res.status(500).send({ message: "Something went wrong." });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id, {}, { isDeleted: false });

    if (!blog) return res.status(404).send({ message: "Blog not found." });

    res.send(blog);
  } catch (err) {
    res.status(500).send({ message: "Something went wrong." });
  }
};

const createBlog = async (req, res) => {
  try {
    const validatedInput = await createBlogValidator.validateAsync(req.body);

    const blog = await Blog.create(validatedInput);

    res.status(201).send({
      message: "Blog created successfully.",
      data: blog,
    });
  } catch (err) {
    if (err instanceof Joi.ValidationError) {
      res.status(400).send({ message: err.details[0].message });
    }
    res.status(500).send({ message: "Something went wrong." });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id, {}, { isDeleted: false });

    if (!blog) return res.status(404).send({ message: "Blog not found." });

    const validatedInput = await updateBlogValidator.validateAsync(req.body);

    blog.set(validatedInput);

    await blog.save();

    res.status(200).send({
      message: "Blog updated successfully.",
      data: blog,
    });
  } catch (err) {
    if (err instanceof Joi.ValidationError) {
      res.status(400).send({ message: err.details[0].message });
    }
    res.status(500).send({ message: "Something went wrong." });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id, {}, { isDeleted: false });

    if (!blog) return res.status(404).send({ message: "Blog not found." });

    blog.isDeleted = true;

    await blog.save();

    res.send({ message: "Blog deleted successfully." });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong." });
  }
};

module.exports = { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
