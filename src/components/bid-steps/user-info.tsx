import { useSteps } from "@/lib/context/steps-context";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

export default function UserInfo() {
  const { name, phone, setName, setPhone } = useSteps();
  const inputStyle =
    "border outline-none ring-green-400 transition-all duration-300 focus:ring-2 block w-full p-2 mt-2 rounded-lg";

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
  }

  return (
    <div className=" mt-6">
      {/* Name Field */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          First and Last Name:
        </label>
        <input
          type="text"
          id="name"
          className={inputStyle}
          placeholder="Ahmed Adel"
          value={name}
          onChange={handleName}
          required
        />

      </div>
      {/* Phone Number Field */}

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          WhatsApp Number:
        </label>
        <PhoneInput
          specialLabel=""
          inputClass="custom-phone-input"
          preferredCountries={["sa", "ae", "qa", "kw", "bh", "om"]}
          country={"ae"}
          value={phone}
          onChange={(v) => setPhone(v)}
          inputProps={{
            required: true,
          }}
        />

      </div>
    </div>
  );
}
