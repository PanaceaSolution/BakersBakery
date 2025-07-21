import prisma from "../../config/prismaClient.js";

export const createCustomCakeOrder = async (req, res) => {
  const {
    userId,
    shape,
    flavor,
    size,
    theme,
    messageOnCake,
    imageUpload,
    deliveryDate,
    status,
    address,
  } = req.body;

  if (!userId || !shape || !flavor || !size || !deliveryDate || !address) {
    return res.status(400).json({
      message:
        "Please provide all required fields: userId, shape, flavor, size, deliveryDate, address",
    });
  }

  try {
    const order = await prisma.customCakeOrder.create({
      data: {
        userId,
        shape,
        flavor,
        size,
        theme,
        messageOnCake,
        imageUpload,
        deliveryDate: new Date(deliveryDate),
        status,
        address,
      },
    });

    res.status(201).json({
      message: "Custom cake order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Error creating custom cake order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllCustomeCakeOrders = async (req, res) => {
  const allCustomeOrder = await prisma.customCakeOrder.findMany();
  //console.log("all custome cake order", allCustomeOrder);
  if (allCustomeOrder.length == 0) {
    return res.status(400).json({
      message: " No any custome cake order found",
    });
  }
  res.status(200).json({
    message: "Custome cake order fetched successfully",
    data: allCustomeOrder,
  });
};

export const getSingleCustomOrder = async (req, res) => {
  const { id } = req.params;

  const findCake = await prisma.customCakeOrder.findMany({
    where: {
      id,
    },
  });
  //console.log("findl", findCake);
  if (findCake.length == 0) {
    res.status(404).json({
      message: "No Order found",
    });
  }
  res.status(200).json({
    message: "Order fetched successfully",
    data: findCake,
  });
};

export const updateCustomCakeOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!id || !status) {
    return res.status(400).json({
      message: "Please provide id and status",
    });
  }
  try {
    const order = await prisma.customCakeOrder.findUnique({
      where: {
        id,
      },
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    const updatedOrder = await prisma.customCakeOrder.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    res.status(200).json({
      message: "Custom cake order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating custom cake order status:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
