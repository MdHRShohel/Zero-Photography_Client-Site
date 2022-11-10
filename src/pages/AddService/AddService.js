import React from 'react';
import toast from "react-hot-toast";
import useTitle from '../../components/UseTitle';
const AddService = () => {
  useTitle("ZP | Add Service");
  //review add handler
  const addService = (event) => {
    event.preventDefault();
    const img = event.target.img.value;
    const title = event.target.title.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const newService = { title, img, price, description };

    fetch("http://localhost:5000/add-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service Added");
          event.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={addService} className="mx-auto w-9/12 lg:w-6/12 ">
        <div className=" p-8 my-4  container  mx-auto mb-12  rounded-2xl shadow-2xl">
          <div className=" text-center">
            <h1 className="font-bold  uppercase text-3xl">Add a Service</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-5">
            <input
              name="title"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Service Title"
              required
            />

            <input
              name="img"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Service Image URL"
              required
            />

            <input
              name="price"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Service Price"
              required
            />
          </div>
          <div className="my-4">
            <textarea
              name="description"
              placeholder="Service Description"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-outline"
              type="submit"
              value="ADD SERVICE"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
