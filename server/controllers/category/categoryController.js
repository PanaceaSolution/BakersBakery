import prisma from "../../config/prismaClient.js";

export const createCategory = async (req, res) => {
  const { name, slug, image } = req.body;
  if (!name || !slug || !image) {
    res.status(400).json({
      message: "Please provide name, slug and image of category",
    });
    return;
  }
  const existingCategory = await prisma.category.findFirst({
    where: { name },
  });
  //console.log("existingg", existingCategory);
  if (existingCategory) {
    res.status(400).json({
      message: "This category already exist, please choose unique category",
    });
    return;
  }
  const category = await prisma.category.create({
    data: {
      name,
      slug,
      image,
    },
  });
  res.status(200).json({
    message: "Category created successfully",
    data: category,
  });
};

export const findAllCategory = async (req, res) => {
  const allCategory = await prisma.category.findMany();
  //console.log(allCategory);
  if (allCategory.length == 0) {
    return res.status(404).json({
      message: "No category Found",
    });
  }
  res.status(200).json({
    message: "Category fetched successfully",
    data: allCategory,
  });
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, slug, image } = req.body;

  if (!id) {
    return res.status(400).json({
      message: "Please provide Id",
    });
  }

  const existingCategory = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  //console.log("existing", existingCategory);
  if (!existingCategory) {
    return res.status(404).json({
      message: "No category found with that id",
    });
  }
  const updatedCategory = await prisma.category.update({
    where: {
      id,
    },
    data: {
      name,
      slug,
      image,
    },
  });
  res.status(200).json({
    message: "Category updated cussessfully",
    data: updatedCategory,
  });
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  const foundCategoty = await prisma.category.findMany({
    where: {
      id,
    },
  });
  if (foundCategoty.length == 0) {
    return res.status(404).json({
      message: "No category found to delete",
    });
  }

  await prisma.category.delete({
    where: {
      id,
    },
  });
  res.status(200).json({
    message: "Category deleted successfully",
  });
};
