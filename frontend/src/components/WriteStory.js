import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const WriteStory = () => {
  const [prompt, setPrompt] = useState("");
  const [genres, setGenres] = useState([]);
  const [response, setResponse] = useState("");

  const { userInfo } = useContext(UserContext);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleGenreChange = (e) => {
    const selectedGenres = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setGenres(selectedGenres);
  };

  const handlePost = () => {
    fetch("https://us-central1-storystan-5ff27.cloudfunctions.net/postStory", {
      method: "POST",
      body: JSON.stringify({ story: response, token: userInfo.accessToken }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prompt, genres);

    // Send a request to the server with prompt and genres
    // Replace the API_ENDPOINT with your server endpoint
    fetch(
      "https://us-central1-storystan-5ff27.cloudfunctions.net/generateStory",
      {
        method: "POST",
        body: JSON.stringify({ prompt, genres, token: userInfo.accessToken }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then((response) => response.json())
      .then((data) => setResponse(data.story))
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-4/6 bg-white p-4">
      <h2 className="text-xl font-bold mb-4">Write a Story</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="prompt" className="block font-bold mb-1">
            Prompt:
          </label>
          <textarea
            id="prompt"
            className="w-full p-2 border border-gray-300 rounded"
            value={prompt}
            onChange={handlePromptChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genres" className="block font-bold mb-1">
            Genres:
          </label>
          <select
            id="genres"
            className="w-full p-2 border border-gray-300 rounded"
            multiple
            value={genres}
            onChange={handleGenreChange}
            required
          >
            <option value="genre1">Genre 1</option>
            <option value="genre2">Genre 2</option>
            <option value="genre3">Genre 3</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {response && (
        <div className="mt-4">
          <h3 className="font-bold">Response:</h3>
          <p>{response}</p>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handlePost}
          >
            Post story!.
          </button>
        </div>
      )}
    </div>
  );
};

export default WriteStory;
