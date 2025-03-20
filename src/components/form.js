import { useState, useEffect } from "react";

function Form({places, setPlaces}) {
  const Typs = ["resturant", "Hotel", "Park"];
  const [data, setData] = useState({
    name: "",
    type: "",
    address: "",
    date:"",
  });
  //const [places, setPlaces] = useState([]);

  // Load data from localStorage when the component loads
  useEffect(() => {
    const savedPlaces = localStorage.getItem("places");
    if (savedPlaces) {
      setPlaces(JSON.parse(savedPlaces));
    }
  }, []);

  // Updating form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Update the place type from the drop-down list
  const handleselect = (e) => {
    setData((prevData) => ({
      ...prevData,
      type: e.target.value,
    }));
  };

  // Submitting the form and saving it to localStorage
  const handleSubmit = (e) => {
    setTimeout(()=>{
        e.preventDefault();
        const updatedPlaces = [...places, data];
        setPlaces(updatedPlaces);
        localStorage.setItem("places", JSON.stringify(updatedPlaces));
        setData({ name: "", type: "", address: "" });
    },3000)
    
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          placeholder="Name"
          maxLength={25}
        />
        <select name="type" value={data.type} onChange={handleselect}>
          <option value="">Select type</option>
          {Typs.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleInputChange}
          placeholder="Address"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;