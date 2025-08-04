import prisma from "../../config/prismaClient.js";

export const createReview = async (req, res) => {
  const { userId, message, rating, image, isApproved } = req.body;

  if (!userId || !message || !rating || !image) {
    return res.status(400).json({
      message: "please provide userId, message, rating, and image",
    });
  }
  const reviews = await prisma.review.create({
    data: {
      userId,
      message,
      rating,
      image,
      isApproved: false,
    },
  });
  res.status(200).json({
    message: "Review created successfully",
    data: reviews,
  });
};
export const getApprovedReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      where: { isApproved: true },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ reviews });
  } catch (error) {
    console.error("Error fetching approved reviews:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany();

    res.status(200).json({
      message: "Review fetched successfully",
      data: reviews,
    });
  } catch (error) {
    console.error("Error fetching approved reviews:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteReview = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "Please provide Id",
    });
  }
  const findReview = await prisma.review.findMany({
    where: {
      id,
    },
  });
  if (findReview.length == 0) {
    return res.status(404).json({
      message: "No review found with that Id",
    });
  }
  await prisma.review.delete({
    where: {
      id,
    },
  });
  res.status(200).json({
    message: "Review delete successfully ",
  });
};

export const approveReview = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Please provide review ID" });
  }

  try {
    const review = await prisma.review.findUnique({
      where: { id },
    });

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (review.isApproved) {
      return res.status(400).json({ message: "Review is already approved" });
    }

    const updatedReview = await prisma.review.update({
      where: { id },
      data: { isApproved: true },
    });

    res.status(200).json({
      message: "Review approved successfully",
      review: updatedReview,
    });
  } catch (error) {
    console.error("Error approving review:", error);
    res.status(500).json({ message: "Failed to approve review" });
  }
};
