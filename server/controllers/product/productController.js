// import prisma from "../../generated/prisma/index.js";
import prisma from "../../config/prismaClient.js";
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      categoryId,
      images,
      tags,
      available,
      isFeatured,
    } = req.body;
    if (!name || !description || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        categoryId,
        images,
        tags,
        available: available ?? true,
        isFeatured: isFeatured ?? false,
      },
    });
    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log("error found", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
