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
