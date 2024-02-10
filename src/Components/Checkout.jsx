import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, title, fee } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.name.value;
    const email = user?.email || "Unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
        service: _id,
        serviceName: title,
        fee,
        customer: fullName,
        email,
        phone,
        message
    }
    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
            alert('Order Placed successfully');
            form.reset();
        }
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <h2 className="text-3xl font-bold text-center">
            Purchase {title} Course
          </h2>
          <h2 className="text-2xl font-bold text-center">Fee: ${fee}</h2>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlePlaceOrder} className="">
              <h2 className="text-2xl font-semibold text-center">
                Fill the Form
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-md">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered font-semibold text-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-md">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                  readOnly
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-md">
                    Phone
                  </span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Note</span>
                </label>
                <textarea
                  name="message"
                  className="textarea border-gray-300"
                  placeholder="Note Anything to inform us!"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Purchase</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
