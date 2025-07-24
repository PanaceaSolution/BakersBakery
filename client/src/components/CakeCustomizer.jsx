import React, { useEffect, useState } from "react";

const CakeCustomizer = () => {
  const [cakeDetails, setCakeDetails] = useState({
    flavour: "Strawberry",
    shape: "Round",
    size: "2 Pound",
    layers: 3,
    message: "Happiest Birthday, my love ❤️",
    photo: null,
  });

  const [previewUrl, setPreviewUrl] = useState("");


  useEffect(() => {
    if (cakeDetails.photo) {
      const objectUrl = URL.createObjectURL(cakeDetails.photo);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl("");
    }
  }, [cakeDetails.photo]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setCakeDetails({ ...cakeDetails, photo: file });
    }
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen px-[46px] py-6">
  <h2 className="text-2xl font-semibold mb-1">Customize your Cake</h2>
  <p className="text-gray-600 mb-8">Create a cake that’s truly yours — pick your flavor, shape, size, and add your personal touch.</p>

  <div className="flex gap-6 w-[1740px] h-[1216px]">
    {/* Left Section */}
    <div className="bg-white rounded-xl p-8 w-[893px] h-[1138px] space-y-8 shadow">
      {/* Step 1: Flavour */}
      <div className="flex items-start gap-3">
        <div className="bg-[#8C1C32] text-white w-[39px] h-[39px] flex items-center justify-center rounded-[10px]">1</div>
        <div className="w-full">
          <p className="font-semibold mb-2">Pick Your Base Flavor</p>
          <label className="flex items-center gap-3">
            <span className="text-black">Select Flavour :</span>
            <select className="border px-4 py-2 rounded-md shadow text-black">
              <option>🍓 Strawberry</option>
              <option>🍫 Chocolate</option>
              <option>🍋 Lemon</option>
              <option>🍦 Vanilla</option>
            </select>
          </label>
        </div>
      </div>

      {/* Step 2: Shape */}
      <div className="flex items-start gap-3">
        <div className="bg-[#8C1C32] text-white w-[39px] h-[39px] flex items-center justify-center rounded-[10px]">2</div>
        <div className="w-full">
          <p className="font-semibold mb-2">Choose the Cake Shape</p>
          <div className="grid grid-cols-3 gap-4">
            <button className="border rounded-md py-4 flex flex-col items-center">Square</button>
            <button className="border rounded-md py-4 flex flex-col items-center">Round</button>
            <button className="border rounded-md py-4 flex flex-col items-center text-red-600">❤️<span>Heart</span></button>
            <button className="border rounded-md py-4 flex flex-col items-center col-span-1">Rectangle</button>
            <button className="border rounded-md py-4 flex flex-col items-center col-span-1">MultiShape</button>
            <button className="border rounded-md py-4 flex flex-col items-center col-span-1">PhotoCraft</button>
          </div>
        </div>
      </div>

      {/* Step 3: Size */}
      <div className="flex items-start gap-3">
        <div className="bg-[#8C1C32] text-white w-[39px] h-[39px] flex items-center justify-center rounded-[10px]">3</div>
        <div className="w-full">
          <p className="font-semibold mb-2">Select Size</p>
          <div className="space-y-2">
            <label className="block"><input type="radio" name="size" className="mr-2" />Mini (300g)</label>
            <label className="block"><input type="radio" name="size" className="mr-2" />1 Pound</label>
            <label className="block"><input type="radio" name="size" className="mr-2" />2 Pound</label>
            <label className="block flex items-center gap-2">
              <input type="radio" name="size" className="mr-2" />Custom Size:
              <input type="text" placeholder="e.g. 1.5kg" className="border px-2 py-1 rounded-md w-32" />
            </label>
          </div>
        </div>
      </div>

      {/* Step 4: Layers */}
      <div className="flex items-start gap-3">
        <div className="bg-[#8C1C32] text-white w-[39px] h-[39px] flex items-center justify-center rounded-[10px]">4</div>
        <div className="w-full">
          <p className="font-semibold mb-2">Select Number of Layers (3–10 layers)</p>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" checked readOnly className="mr-2" />
            <span className="border px-4 py-2 rounded-md">3</span>
            <button className="bg-[#8C1C32] text-white px-2 py-1 rounded-md">+</button>
            <button className="bg-[#8C1C32] text-white px-2 py-1 rounded-md">−</button>
          </div>
          <label className="block"><input type="radio" className="mr-2" />No layers needed</label>
        </div>
      </div>

      {/* Step 5: Message */}
      <div className="flex items-start gap-3">
        <div className="bg-[#8C1C32] text-white w-[39px] h-[39px] flex items-center justify-center rounded-[10px]">5</div>
        <div className="w-full">
          <p className="font-semibold mb-2">Add a Message</p>
          <input
            type="text"
            maxLength="40"
            placeholder="Happiest Birthday, my love ❤️"
            className="w-full border px-4 py-2 rounded-md"
          />
          <p className="text-sm text-gray-500 mt-1">Max 40 characters</p>
        </div>
      </div>

      {/* Upload Photo */}
      <div className="flex items-start gap-3">
        <div className="w-[39px]" />
        <div className="w-full">
          <p className="font-semibold mb-2">Upload Photo (Optional)</p>
          <input type="file" />
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="flex items-start gap-3">
        <div className="w-[39px]" />
        <button className="bg-[#8C1C32] text-white py-3 px-6 rounded-md mt-2">Add To Cart</button>
      </div>
    </div>

    {/* Right Section (Preview) */}
    <div className="bg-[#F9F9F9] w-[689px] h-[879px] rounded-[10px] p-[54px] flex flex-col justify-between">
      <div>
        <h3 className="text-center font-semibold text-lg mb-4">🎂 Cake Details Preview</h3>
        <ul className="space-y-4 text-sm">
          <li>● <strong>Flavour :</strong> 🍓 Strawberry</li>
          <li>● <strong>Message :</strong> Happiest Birthday, my love ❤️</li>
          <li>● <strong>Size :</strong> 2 Pound</li>
          <li>● <strong>Layers :</strong> 3 layers</li>
          <li>● <strong>Shape :</strong> 
            <div className="border rounded-md mt-2 p-2 text-center w-[80px]">
              <div className="mx-auto w-[20px] h-[20px] bg-gray-400 rounded-full mb-1" />
              <span>Round</span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-2">● <strong>Image :</strong></p>
        <img src="/your-image.jpg" alt="Preview" className="w-[150px] h-[120px] rounded-md object-cover" />
      </div>
    </div>
  </div>
</div>

  )
   
  
};

export default CakeCustomizer;
