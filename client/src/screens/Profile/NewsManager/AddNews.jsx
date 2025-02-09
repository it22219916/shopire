import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import authAxios from "../../../utils/authAxios";

export default function AddNews() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async () => {
    // Check for empty fields
    const { title, description } = formData;
    if (!title || !description) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        title: !title ? "Title is required" : "",
        description: !description ? "Description is required" : "",
      }));
      return;
    }

    // Check for character limit in title
    if (formData.title.length > 30) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        title: "Title should not exceed 30 characters",
      }));
      return;
    }

    try {
      const result = await authAxios.post(`http://localhost:3001/api/news/`, formData);
      if (result) {
        navigate("/userProfile");
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleCreate = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    setErrorMessages((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <>
      <div className="max-w-md mx-auto container">
        <h1 className="text-3xl text-center mb-6">News Add</h1>
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            variant="outlined"
            value={formData.title}
            onChange={(e) => handleCreate("title", e.target.value)}
            error={!!errorMessages.title}
            helperText={errorMessages.title}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin="normal"
            label="Image Link"
            variant="outlined"
            value={formData.img}
            onChange={(e) => handleCreate("img", e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin="normal"
            multiline
            rows={4}
            label="Description"
            variant="outlined"
            value={formData.description}
            onChange={(e) => handleCreate("description", e.target.value)}
            error={!!errorMessages.description}
            helperText={errorMessages.description}
          />
        </Grid>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            fullWidth
          >
            Add
          </Button>
          <div style={{ width: "8px" }}></div> {/* This adds space between buttons */}
          <Button
            variant="outlined"
            fullWidth
            component={Link}
            to="/userProfile"
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}
