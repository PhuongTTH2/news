import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
const Announcements = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("code");
  const [page, setPage] = useState(1);

  const client_id = "4mB0CC1xdwTfTQGjF1v1uO9vS2Z8ubzBPd4X0B86IEU";
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`;

  const fetchImages = () => {
    axios
      .get(fetchUrl, {
        headers: {},
      })
      .then((response) => {
        setData([...data, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
    setPage(page + 1);
  };
  const searchImages = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
      setData([]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  useEffect(() => {
    setInterval(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) =>
        console.log(response)
      );
    }, 5000);
  }, []);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchImages}
      hasMore={true}
      height={600}
      loader={<p>Load more...</p>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {data.map((data, key) => (
        <div className="updatesContent" key={key}>
          <div className="textTitle">
            <p>
              <a href="/">
                <strong>{data.user.name}</strong>
              </a>{" "}
              <span className="fw--300">(12/15): {data.alt_description}</span>
            </p>
          </div>
          <div className="clearfix" />
          <div className="videoWrapper">
            <a href="/">
              <img alt="alt" src={data.urls.small} />
            </a>
          </div>
          <div className="updatesList">
            <ul>
              <li className="fs--12">
                <strong>Jimbob:</strong> This was really interesting!!
              </li>
              <li className="fs--12">
                <strong>SallyRed:</strong> Yes. we humans are fraill!
              </li>
              <li className="fs--12">
                <strong>TomGun:</strong> One of the best sermons ever!
              </li>
            </ul>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default Announcements;
