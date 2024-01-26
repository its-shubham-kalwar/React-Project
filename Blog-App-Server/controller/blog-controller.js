const mongoose = require("mongoose");
const Blog = require("../model/Blog");

// fetch list of blogs

const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(e);
  }

  if (!blogList) {
    return res.status(404).json({ Message: "No Blogs Found" });
  }

  return res.status(200).json({ blogList });
};

// add a new blog

const addNewBlog = async (req, res) => {
  const { title, description } = res.body;
  const currentDate = new Date();

  const newlyCreateBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newlyCreateBlog.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlyCreateBlog.save(session);
    session.commitTransaction();
  } catch (e) {
    return res.send(500).json({ Message: e });
  }

  return res.status(200).json({ newlyCreateBlog });
};

// delete a blog

const deleteABlog = async (req, res) => {
  const id = res.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ Message: "Blog not found" });
    }

    return res.status(200).json({ Message: "Blog not found" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ Message: "Unable to delete ! Please try again" });
  }
};

// update a blog

const updateABlog = async (req, res) => {
  const id = req.params.id;

  const { title, description } = req.body;
  let currentBlogToUpdate;

  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);

    return res
      .send(500)
      .json({
        Message: "Something went wrong ehile updating ! Please try again",
      });
  }

  if (!currentBlogToUpdate) {
    return res.status(500).json({ message: "Unable to update" });
  }

  return res.send(200).json({ currentBlogToUpdate });
};


module.exports = { fetchListOfBlogs, deleteABlog, updateABlog, addNewBlog};