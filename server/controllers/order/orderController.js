import prisma from "../../config/prismaClient.js";

export const createOrder = async (req, res) => {
  const {
    userId,
    orderItems,
    totalAmount,
    paymentStatus,
    paymentMethod,
    deliveryAddress,
    orderStatus,
  } = req.body;

  if (!userId || !orderItems || !totalAmount || !deliveryAddress) {
    return res.status(400).json({
      message:
        "Please provide userId, orderItems, totalAmount, and deliveryAddress",
    });
  }

  try {
    const order = await prisma.order.create({
      data: {
        userId,
        orderItems,
        totalAmount,
        paymentStatus,
        paymentMethod,
        deliveryAddress,
        orderStatus,
      },
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllOrder = async (req, res) => {
  const findOrder = await prisma.order.findMany();
  //console.log(findOrder);
  if (findOrder.length == 0) {
    return res.status(404).json({
      message: "No Order found",
    });
  }
  res.status(200).json({
    message: "order fetched successfully",
    data: findOrder,
  });
};

export const getOrderById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "ERROR",
    });
  }
  const findOrder = await prisma.order.findMany({
    where: {
      id,
    },
  });
  //console.log("order find", findOrder);
  if (findOrder.length == 0) {
    return res.status(400).json({
      message: "No order found",
    });
  }
  res.status(200).json({
    message: "Order fetched successfully",
    findOrder,
  });
};
