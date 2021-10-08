import { TextField } from "@material-ui/core";

const BillingDetailsFields = () => {
  return (
    <>
      <TextField
        name="name"
        label="Name"
        type="text"
        placeholder="Jane Doe"
        required
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        placeholder="jane.doe@example.com"
        required
      />
      <TextField
        name="address"
        label="Address"
        type="text"
        placeholder="185 Berry St. Suite 550"
        required
      />
      <TextField
        name="city"
        label="City"
        type="text"
        placeholder="San Francisco"
        required
      />
      <TextField
        name="state"
        label="State"
        type="text"
        placeholder="California"
        required
      />
      <TextField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="94103"
        required
      />
    </>
  );
};

export default BillingDetailsFields;