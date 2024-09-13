import "./styles.css";

import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.length == 0 ||
      email.length == 0 ||
      phone.length == 0 ||
      dob.length == 0
    ) {
      setError(true);
    } else if (email.includes("@")) {
      setError(false);
    } else if (phone.length < 10 && phone.length > 0) {
      setError(true);
    } else if (dob > Date()) {
      setError(true);
    }
  };

  return (
    <div className="Modal">
      <React.Fragment>
        <h1>User Details Modal</h1>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open Form
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Fill Details</DialogTitle>
          <DialogContent>
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div>
                  <div>
                    <label>Username:</label>
                    <input
                      type="text"
                      id="username"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div>
                    {error && username.length <= 0 ? (
                      <label>Please fill out this field</label>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div>
                  <div>
                    <label>Email Address:</label>
                    <input
                      type="text"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    {error && email.length > 0 && !email.includes("@") ? (
                      <label>
                        Please include an '@' in email address.{email} is
                        missing an '@'.
                      </label>
                    ) : (
                      <div>
                        {error && email.length <= 0 ? (
                          <label>Please fill out this field</label>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div>
                    <label>Phone Number:</label>
                    <input
                      type="number"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    {error && phone.length <= 0 ? (
                      <label>Please fill out this field</label>
                    ) : (
                      <div>
                        {error && phone.length < 10 && phone.length > 0 ? (
                          <label>
                            Invalid phone no. please enter a 10-digit phone
                            number
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div>
                    <label>Date of Birth:</label>
                    <input
                      type="date"
                      id="dob"
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                  <div>
                    {error && dob.length <= 0 ? (
                      <label>Please fill out this field</label>
                    ) : (
                      <div>
                        {error && dob > Date() ? (
                          <label>
                            Invalid date of birth.Date of birth cant be in
                            future.
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Button onClick={handleSubmit} className="submit-button">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleSubmit} type="submit">
            Submit
          </Button> */}
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
