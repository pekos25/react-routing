# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`



# react router installation

npm install react-router-dom@6

in App.js import { BrowserRouter, Routes, Route } from "react-router-dom";

```
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile data={data} />} />
          <Route path="/profile/:id" element={<Userprofile data={data} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

```
All of components Home, About, Profile , Error import on the top of App componet

With import { useNavigate } from "react-router-dom";
we can create programmaticaly link to the other page,
with button click:
```
 <button
        className="button"
        onClick={() => {
          navigate(`/profile/${user.id}`);
        }}
      >
        Show user data
      </button>
```

With Link we can redirect from existed page to another 
import { Link } from "react-router-dom";

```
<Link to={`/profile/${user.id}`}><button className="button">Show user data </button></Link> 
```
